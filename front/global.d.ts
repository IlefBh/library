declare module 'expo-image-picker' {
    import { PermissionResponse } from 'expo-modules-core';
    import { ImagePickerResult, ImagePickerOptions } from 'expo-image-picker/build/ImagePicker.types';

    export * from 'expo-image-picker/build/ImagePicker.types';

    export enum MediaTypeOptions {
        Images = 'Images',
        Videos = 'Videos',
        All = 'All',
    }

    export function requestMediaLibraryPermissionsAsync(): Promise<PermissionResponse>;
    export function launchImageLibraryAsync(
        options?: ImagePickerOptions
    ): Promise<ImagePickerResult>;
}