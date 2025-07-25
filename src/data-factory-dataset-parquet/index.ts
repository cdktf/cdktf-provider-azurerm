/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetParquetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}
  */
  readonly compressionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * azure_blob_fs_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#azure_blob_fs_location DataFactoryDatasetParquet#azure_blob_fs_location}
  */
  readonly azureBlobFsLocation?: DataFactoryDatasetParquetAzureBlobFsLocation;
  /**
  * azure_blob_storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetParquetAzureBlobStorageLocation;
  /**
  * http_server_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetParquetHttpServerLocation;
  /**
  * schema_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetParquetSchemaColumn[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetParquetTimeouts;
}
export interface DataFactoryDatasetParquetAzureBlobFsLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_file_system_enabled DataFactoryDatasetParquet#dynamic_file_system_enabled}
  */
  readonly dynamicFileSystemEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#file_system DataFactoryDatasetParquet#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}
  */
  readonly path?: string;
}

export function dataFactoryDatasetParquetAzureBlobFsLocationToTerraform(struct?: DataFactoryDatasetParquetAzureBlobFsLocationOutputReference | DataFactoryDatasetParquetAzureBlobFsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_file_system_enabled: cdktf.booleanToTerraform(struct!.dynamicFileSystemEnabled),
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataFactoryDatasetParquetAzureBlobFsLocationToHclTerraform(struct?: DataFactoryDatasetParquetAzureBlobFsLocationOutputReference | DataFactoryDatasetParquetAzureBlobFsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_file_system_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicFileSystemEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_filename_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicFilenameEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_path_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicPathEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetParquetAzureBlobFsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryDatasetParquetAzureBlobFsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicFileSystemEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFileSystemEnabled = this._dynamicFileSystemEnabled;
    }
    if (this._dynamicFilenameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFilenameEnabled = this._dynamicFilenameEnabled;
    }
    if (this._dynamicPathEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPathEnabled = this._dynamicPathEnabled;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetParquetAzureBlobFsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicFileSystemEnabled = undefined;
      this._dynamicFilenameEnabled = undefined;
      this._dynamicPathEnabled = undefined;
      this._fileSystem = undefined;
      this._filename = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicFileSystemEnabled = value.dynamicFileSystemEnabled;
      this._dynamicFilenameEnabled = value.dynamicFilenameEnabled;
      this._dynamicPathEnabled = value.dynamicPathEnabled;
      this._fileSystem = value.fileSystem;
      this._filename = value.filename;
      this._path = value.path;
    }
  }

  // dynamic_file_system_enabled - computed: false, optional: true, required: false
  private _dynamicFileSystemEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicFileSystemEnabled() {
    return this.getBooleanAttribute('dynamic_file_system_enabled');
  }
  public set dynamicFileSystemEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicFileSystemEnabled = value;
  }
  public resetDynamicFileSystemEnabled() {
    this._dynamicFileSystemEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFileSystemEnabledInput() {
    return this._dynamicFileSystemEnabled;
  }

  // dynamic_filename_enabled - computed: false, optional: true, required: false
  private _dynamicFilenameEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicFilenameEnabled() {
    return this.getBooleanAttribute('dynamic_filename_enabled');
  }
  public set dynamicFilenameEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicFilenameEnabled = value;
  }
  public resetDynamicFilenameEnabled() {
    this._dynamicFilenameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFilenameEnabledInput() {
    return this._dynamicFilenameEnabled;
  }

  // dynamic_path_enabled - computed: false, optional: true, required: false
  private _dynamicPathEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicPathEnabled() {
    return this.getBooleanAttribute('dynamic_path_enabled');
  }
  public set dynamicPathEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicPathEnabled = value;
  }
  public resetDynamicPathEnabled() {
    this._dynamicPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPathEnabledInput() {
    return this._dynamicPathEnabled;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataFactoryDatasetParquetAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}
  */
  readonly dynamicContainerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}
  */
  readonly path?: string;
}

export function dataFactoryDatasetParquetAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference | DataFactoryDatasetParquetAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    dynamic_container_enabled: cdktf.booleanToTerraform(struct!.dynamicContainerEnabled),
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataFactoryDatasetParquetAzureBlobStorageLocationToHclTerraform(struct?: DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference | DataFactoryDatasetParquetAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_container_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicContainerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_filename_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicFilenameEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_path_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicPathEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryDatasetParquetAzureBlobStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._dynamicContainerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicContainerEnabled = this._dynamicContainerEnabled;
    }
    if (this._dynamicFilenameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFilenameEnabled = this._dynamicFilenameEnabled;
    }
    if (this._dynamicPathEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPathEnabled = this._dynamicPathEnabled;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetParquetAzureBlobStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._dynamicContainerEnabled = undefined;
      this._dynamicFilenameEnabled = undefined;
      this._dynamicPathEnabled = undefined;
      this._filename = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._dynamicContainerEnabled = value.dynamicContainerEnabled;
      this._dynamicFilenameEnabled = value.dynamicFilenameEnabled;
      this._dynamicPathEnabled = value.dynamicPathEnabled;
      this._filename = value.filename;
      this._path = value.path;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // dynamic_container_enabled - computed: false, optional: true, required: false
  private _dynamicContainerEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicContainerEnabled() {
    return this.getBooleanAttribute('dynamic_container_enabled');
  }
  public set dynamicContainerEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicContainerEnabled = value;
  }
  public resetDynamicContainerEnabled() {
    this._dynamicContainerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicContainerEnabledInput() {
    return this._dynamicContainerEnabled;
  }

  // dynamic_filename_enabled - computed: false, optional: true, required: false
  private _dynamicFilenameEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicFilenameEnabled() {
    return this.getBooleanAttribute('dynamic_filename_enabled');
  }
  public set dynamicFilenameEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicFilenameEnabled = value;
  }
  public resetDynamicFilenameEnabled() {
    this._dynamicFilenameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFilenameEnabledInput() {
    return this._dynamicFilenameEnabled;
  }

  // dynamic_path_enabled - computed: false, optional: true, required: false
  private _dynamicPathEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicPathEnabled() {
    return this.getBooleanAttribute('dynamic_path_enabled');
  }
  public set dynamicPathEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicPathEnabled = value;
  }
  public resetDynamicPathEnabled() {
    this._dynamicPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPathEnabledInput() {
    return this._dynamicPathEnabled;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataFactoryDatasetParquetHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}
  */
  readonly relativeUrl: string;
}

export function dataFactoryDatasetParquetHttpServerLocationToTerraform(struct?: DataFactoryDatasetParquetHttpServerLocationOutputReference | DataFactoryDatasetParquetHttpServerLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}


export function dataFactoryDatasetParquetHttpServerLocationToHclTerraform(struct?: DataFactoryDatasetParquetHttpServerLocationOutputReference | DataFactoryDatasetParquetHttpServerLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_filename_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicFilenameEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_path_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicPathEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_url: {
      value: cdktf.stringToHclTerraform(struct!.relativeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetParquetHttpServerLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryDatasetParquetHttpServerLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicFilenameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFilenameEnabled = this._dynamicFilenameEnabled;
    }
    if (this._dynamicPathEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPathEnabled = this._dynamicPathEnabled;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._relativeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeUrl = this._relativeUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetParquetHttpServerLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicFilenameEnabled = undefined;
      this._dynamicPathEnabled = undefined;
      this._filename = undefined;
      this._path = undefined;
      this._relativeUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicFilenameEnabled = value.dynamicFilenameEnabled;
      this._dynamicPathEnabled = value.dynamicPathEnabled;
      this._filename = value.filename;
      this._path = value.path;
      this._relativeUrl = value.relativeUrl;
    }
  }

  // dynamic_filename_enabled - computed: false, optional: true, required: false
  private _dynamicFilenameEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicFilenameEnabled() {
    return this.getBooleanAttribute('dynamic_filename_enabled');
  }
  public set dynamicFilenameEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicFilenameEnabled = value;
  }
  public resetDynamicFilenameEnabled() {
    this._dynamicFilenameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFilenameEnabledInput() {
    return this._dynamicFilenameEnabled;
  }

  // dynamic_path_enabled - computed: false, optional: true, required: false
  private _dynamicPathEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicPathEnabled() {
    return this.getBooleanAttribute('dynamic_path_enabled');
  }
  public set dynamicPathEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicPathEnabled = value;
  }
  public resetDynamicPathEnabled() {
    this._dynamicPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPathEnabledInput() {
    return this._dynamicPathEnabled;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // relative_url - computed: false, optional: false, required: true
  private _relativeUrl?: string; 
  public get relativeUrl() {
    return this.getStringAttribute('relative_url');
  }
  public set relativeUrl(value: string) {
    this._relativeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUrlInput() {
    return this._relativeUrl;
  }
}
export interface DataFactoryDatasetParquetSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}
  */
  readonly type?: string;
}

export function dataFactoryDatasetParquetSchemaColumnToTerraform(struct?: DataFactoryDatasetParquetSchemaColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataFactoryDatasetParquetSchemaColumnToHclTerraform(struct?: DataFactoryDatasetParquetSchemaColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetParquetSchemaColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFactoryDatasetParquetSchemaColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetParquetSchemaColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataFactoryDatasetParquetSchemaColumnList extends cdktf.ComplexList {
  public internalValue? : DataFactoryDatasetParquetSchemaColumn[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFactoryDatasetParquetSchemaColumnOutputReference {
    return new DataFactoryDatasetParquetSchemaColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryDatasetParquetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}
  */
  readonly update?: string;
}

export function dataFactoryDatasetParquetTimeoutsToTerraform(struct?: DataFactoryDatasetParquetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataFactoryDatasetParquetTimeoutsToHclTerraform(struct?: DataFactoryDatasetParquetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetParquetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryDatasetParquetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetParquetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet azurerm_data_factory_dataset_parquet}
*/
export class DataFactoryDatasetParquet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_dataset_parquet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryDatasetParquet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryDatasetParquet to import
  * @param importFromId The id of the existing DataFactoryDatasetParquet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryDatasetParquet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_dataset_parquet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_factory_dataset_parquet azurerm_data_factory_dataset_parquet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetParquetConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetParquetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_parquet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.37.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._compressionCodec = config.compressionCodec;
    this._compressionLevel = config.compressionLevel;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._folder = config.folder;
    this._id = config.id;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._azureBlobFsLocation.internalValue = config.azureBlobFsLocation;
    this._azureBlobStorageLocation.internalValue = config.azureBlobStorageLocation;
    this._httpServerLocation.internalValue = config.httpServerLocation;
    this._schemaColumn.internalValue = config.schemaColumn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: string; 
  public get compressionLevel() {
    return this.getStringAttribute('compression_level');
  }
  public set compressionLevel(value: string) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // azure_blob_fs_location - computed: false, optional: true, required: false
  private _azureBlobFsLocation = new DataFactoryDatasetParquetAzureBlobFsLocationOutputReference(this, "azure_blob_fs_location");
  public get azureBlobFsLocation() {
    return this._azureBlobFsLocation;
  }
  public putAzureBlobFsLocation(value: DataFactoryDatasetParquetAzureBlobFsLocation) {
    this._azureBlobFsLocation.internalValue = value;
  }
  public resetAzureBlobFsLocation() {
    this._azureBlobFsLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobFsLocationInput() {
    return this._azureBlobFsLocation.internalValue;
  }

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation = new DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference(this, "azure_blob_storage_location");
  public get azureBlobStorageLocation() {
    return this._azureBlobStorageLocation;
  }
  public putAzureBlobStorageLocation(value: DataFactoryDatasetParquetAzureBlobStorageLocation) {
    this._azureBlobStorageLocation.internalValue = value;
  }
  public resetAzureBlobStorageLocation() {
    this._azureBlobStorageLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageLocationInput() {
    return this._azureBlobStorageLocation.internalValue;
  }

  // http_server_location - computed: false, optional: true, required: false
  private _httpServerLocation = new DataFactoryDatasetParquetHttpServerLocationOutputReference(this, "http_server_location");
  public get httpServerLocation() {
    return this._httpServerLocation;
  }
  public putHttpServerLocation(value: DataFactoryDatasetParquetHttpServerLocation) {
    this._httpServerLocation.internalValue = value;
  }
  public resetHttpServerLocation() {
    this._httpServerLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerLocationInput() {
    return this._httpServerLocation.internalValue;
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn = new DataFactoryDatasetParquetSchemaColumnList(this, "schema_column", false);
  public get schemaColumn() {
    return this._schemaColumn;
  }
  public putSchemaColumn(value: DataFactoryDatasetParquetSchemaColumn[] | cdktf.IResolvable) {
    this._schemaColumn.internalValue = value;
  }
  public resetSchemaColumn() {
    this._schemaColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaColumnInput() {
    return this._schemaColumn.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryDatasetParquetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryDatasetParquetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._annotations),
      compression_codec: cdktf.stringToTerraform(this._compressionCodec),
      compression_level: cdktf.stringToTerraform(this._compressionLevel),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      azure_blob_fs_location: dataFactoryDatasetParquetAzureBlobFsLocationToTerraform(this._azureBlobFsLocation.internalValue),
      azure_blob_storage_location: dataFactoryDatasetParquetAzureBlobStorageLocationToTerraform(this._azureBlobStorageLocation.internalValue),
      http_server_location: dataFactoryDatasetParquetHttpServerLocationToTerraform(this._httpServerLocation.internalValue),
      schema_column: cdktf.listMapper(dataFactoryDatasetParquetSchemaColumnToTerraform, true)(this._schemaColumn.internalValue),
      timeouts: dataFactoryDatasetParquetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      annotations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._annotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compression_codec: {
        value: cdktf.stringToHclTerraform(this._compressionCodec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_level: {
        value: cdktf.stringToHclTerraform(this._compressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_factory_id: {
        value: cdktf.stringToHclTerraform(this._dataFactoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_service_name: {
        value: cdktf.stringToHclTerraform(this._linkedServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azure_blob_fs_location: {
        value: dataFactoryDatasetParquetAzureBlobFsLocationToHclTerraform(this._azureBlobFsLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryDatasetParquetAzureBlobFsLocationList",
      },
      azure_blob_storage_location: {
        value: dataFactoryDatasetParquetAzureBlobStorageLocationToHclTerraform(this._azureBlobStorageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryDatasetParquetAzureBlobStorageLocationList",
      },
      http_server_location: {
        value: dataFactoryDatasetParquetHttpServerLocationToHclTerraform(this._httpServerLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryDatasetParquetHttpServerLocationList",
      },
      schema_column: {
        value: cdktf.listMapperHcl(dataFactoryDatasetParquetSchemaColumnToHclTerraform, true)(this._schemaColumn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryDatasetParquetSchemaColumnList",
      },
      timeouts: {
        value: dataFactoryDatasetParquetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryDatasetParquetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
