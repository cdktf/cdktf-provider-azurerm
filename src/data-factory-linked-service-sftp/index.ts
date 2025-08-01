/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceSftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#additional_properties DataFactoryLinkedServiceSftp#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#annotations DataFactoryLinkedServiceSftp#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#authentication_type DataFactoryLinkedServiceSftp#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#data_factory_id DataFactoryLinkedServiceSftp#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#description DataFactoryLinkedServiceSftp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#host DataFactoryLinkedServiceSftp#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#host_key_fingerprint DataFactoryLinkedServiceSftp#host_key_fingerprint}
  */
  readonly hostKeyFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#id DataFactoryLinkedServiceSftp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#integration_runtime_name DataFactoryLinkedServiceSftp#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#name DataFactoryLinkedServiceSftp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#parameters DataFactoryLinkedServiceSftp#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#password DataFactoryLinkedServiceSftp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#port DataFactoryLinkedServiceSftp#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#private_key_content_base64 DataFactoryLinkedServiceSftp#private_key_content_base64}
  */
  readonly privateKeyContentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#private_key_passphrase DataFactoryLinkedServiceSftp#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#private_key_path DataFactoryLinkedServiceSftp#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#skip_host_key_validation DataFactoryLinkedServiceSftp#skip_host_key_validation}
  */
  readonly skipHostKeyValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#username DataFactoryLinkedServiceSftp#username}
  */
  readonly username: string;
  /**
  * key_vault_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#key_vault_password DataFactoryLinkedServiceSftp#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryLinkedServiceSftpKeyVaultPassword[] | cdktf.IResolvable;
  /**
  * key_vault_private_key_content_base64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#key_vault_private_key_content_base64 DataFactoryLinkedServiceSftp#key_vault_private_key_content_base64}
  */
  readonly keyVaultPrivateKeyContentBase64?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64;
  /**
  * key_vault_private_key_passphrase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#key_vault_private_key_passphrase DataFactoryLinkedServiceSftp#key_vault_private_key_passphrase}
  */
  readonly keyVaultPrivateKeyPassphrase?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#timeouts DataFactoryLinkedServiceSftp#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceSftpTimeouts;
}
export interface DataFactoryLinkedServiceSftpKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#linked_service_name DataFactoryLinkedServiceSftp#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#secret_name DataFactoryLinkedServiceSftp#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceSftpKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceSftpKeyVaultPasswordToHclTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceSftpKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFactoryLinkedServiceSftpKeyVaultPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceSftpKeyVaultPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataFactoryLinkedServiceSftpKeyVaultPasswordList extends cdktf.ComplexList {
  public internalValue? : DataFactoryLinkedServiceSftpKeyVaultPassword[] | cdktf.IResolvable

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
  public get(index: number): DataFactoryLinkedServiceSftpKeyVaultPasswordOutputReference {
    return new DataFactoryLinkedServiceSftpKeyVaultPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#linked_service_name DataFactoryLinkedServiceSftp#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#secret_name DataFactoryLinkedServiceSftp#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64ToTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64OutputReference | DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64ToHclTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64OutputReference | DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#linked_service_name DataFactoryLinkedServiceSftp#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#secret_name DataFactoryLinkedServiceSftp#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseToTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseOutputReference | DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseToHclTerraform(struct?: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseOutputReference | DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataFactoryLinkedServiceSftpTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#create DataFactoryLinkedServiceSftp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#delete DataFactoryLinkedServiceSftp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#read DataFactoryLinkedServiceSftp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#update DataFactoryLinkedServiceSftp#update}
  */
  readonly update?: string;
}

export function dataFactoryLinkedServiceSftpTimeoutsToTerraform(struct?: DataFactoryLinkedServiceSftpTimeouts | cdktf.IResolvable): any {
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


export function dataFactoryLinkedServiceSftpTimeoutsToHclTerraform(struct?: DataFactoryLinkedServiceSftpTimeouts | cdktf.IResolvable): any {
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

export class DataFactoryLinkedServiceSftpTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryLinkedServiceSftpTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFactoryLinkedServiceSftpTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp azurerm_data_factory_linked_service_sftp}
*/
export class DataFactoryLinkedServiceSftp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_linked_service_sftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryLinkedServiceSftp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryLinkedServiceSftp to import
  * @param importFromId The id of the existing DataFactoryLinkedServiceSftp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryLinkedServiceSftp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_linked_service_sftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_factory_linked_service_sftp azurerm_data_factory_linked_service_sftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceSftpConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceSftpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_sftp',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.38.1',
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
    this._authenticationType = config.authenticationType;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._host = config.host;
    this._hostKeyFingerprint = config.hostKeyFingerprint;
    this._id = config.id;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._password = config.password;
    this._port = config.port;
    this._privateKeyContentBase64 = config.privateKeyContentBase64;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._privateKeyPath = config.privateKeyPath;
    this._skipHostKeyValidation = config.skipHostKeyValidation;
    this._username = config.username;
    this._keyVaultPassword.internalValue = config.keyVaultPassword;
    this._keyVaultPrivateKeyContentBase64.internalValue = config.keyVaultPrivateKeyContentBase64;
    this._keyVaultPrivateKeyPassphrase.internalValue = config.keyVaultPrivateKeyPassphrase;
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

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_key_fingerprint - computed: false, optional: true, required: false
  private _hostKeyFingerprint?: string; 
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }
  public set hostKeyFingerprint(value: string) {
    this._hostKeyFingerprint = value;
  }
  public resetHostKeyFingerprint() {
    this._hostKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyFingerprintInput() {
    return this._hostKeyFingerprint;
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

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string; 
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key_content_base64 - computed: false, optional: true, required: false
  private _privateKeyContentBase64?: string; 
  public get privateKeyContentBase64() {
    return this.getStringAttribute('private_key_content_base64');
  }
  public set privateKeyContentBase64(value: string) {
    this._privateKeyContentBase64 = value;
  }
  public resetPrivateKeyContentBase64() {
    this._privateKeyContentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyContentBase64Input() {
    return this._privateKeyContentBase64;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // skip_host_key_validation - computed: false, optional: true, required: false
  private _skipHostKeyValidation?: boolean | cdktf.IResolvable; 
  public get skipHostKeyValidation() {
    return this.getBooleanAttribute('skip_host_key_validation');
  }
  public set skipHostKeyValidation(value: boolean | cdktf.IResolvable) {
    this._skipHostKeyValidation = value;
  }
  public resetSkipHostKeyValidation() {
    this._skipHostKeyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostKeyValidationInput() {
    return this._skipHostKeyValidation;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword = new DataFactoryLinkedServiceSftpKeyVaultPasswordList(this, "key_vault_password", false);
  public get keyVaultPassword() {
    return this._keyVaultPassword;
  }
  public putKeyVaultPassword(value: DataFactoryLinkedServiceSftpKeyVaultPassword[] | cdktf.IResolvable) {
    this._keyVaultPassword.internalValue = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword.internalValue;
  }

  // key_vault_private_key_content_base64 - computed: false, optional: true, required: false
  private _keyVaultPrivateKeyContentBase64 = new DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64OutputReference(this, "key_vault_private_key_content_base64");
  public get keyVaultPrivateKeyContentBase64() {
    return this._keyVaultPrivateKeyContentBase64;
  }
  public putKeyVaultPrivateKeyContentBase64(value: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64) {
    this._keyVaultPrivateKeyContentBase64.internalValue = value;
  }
  public resetKeyVaultPrivateKeyContentBase64() {
    this._keyVaultPrivateKeyContentBase64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPrivateKeyContentBase64Input() {
    return this._keyVaultPrivateKeyContentBase64.internalValue;
  }

  // key_vault_private_key_passphrase - computed: false, optional: true, required: false
  private _keyVaultPrivateKeyPassphrase = new DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseOutputReference(this, "key_vault_private_key_passphrase");
  public get keyVaultPrivateKeyPassphrase() {
    return this._keyVaultPrivateKeyPassphrase;
  }
  public putKeyVaultPrivateKeyPassphrase(value: DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphrase) {
    this._keyVaultPrivateKeyPassphrase.internalValue = value;
  }
  public resetKeyVaultPrivateKeyPassphrase() {
    this._keyVaultPrivateKeyPassphrase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPrivateKeyPassphraseInput() {
    return this._keyVaultPrivateKeyPassphrase.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryLinkedServiceSftpTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryLinkedServiceSftpTimeouts) {
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
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      host_key_fingerprint: cdktf.stringToTerraform(this._hostKeyFingerprint),
      id: cdktf.stringToTerraform(this._id),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      private_key_content_base64: cdktf.stringToTerraform(this._privateKeyContentBase64),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      skip_host_key_validation: cdktf.booleanToTerraform(this._skipHostKeyValidation),
      username: cdktf.stringToTerraform(this._username),
      key_vault_password: cdktf.listMapper(dataFactoryLinkedServiceSftpKeyVaultPasswordToTerraform, true)(this._keyVaultPassword.internalValue),
      key_vault_private_key_content_base64: dataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64ToTerraform(this._keyVaultPrivateKeyContentBase64.internalValue),
      key_vault_private_key_passphrase: dataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseToTerraform(this._keyVaultPrivateKeyPassphrase.internalValue),
      timeouts: dataFactoryLinkedServiceSftpTimeoutsToTerraform(this._timeouts.internalValue),
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
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key_fingerprint: {
        value: cdktf.stringToHclTerraform(this._hostKeyFingerprint),
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
      integration_runtime_name: {
        value: cdktf.stringToHclTerraform(this._integrationRuntimeName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key_content_base64: {
        value: cdktf.stringToHclTerraform(this._privateKeyContentBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_path: {
        value: cdktf.stringToHclTerraform(this._privateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_host_key_validation: {
        value: cdktf.booleanToHclTerraform(this._skipHostKeyValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_password: {
        value: cdktf.listMapperHcl(dataFactoryLinkedServiceSftpKeyVaultPasswordToHclTerraform, true)(this._keyVaultPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceSftpKeyVaultPasswordList",
      },
      key_vault_private_key_content_base64: {
        value: dataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64ToHclTerraform(this._keyVaultPrivateKeyContentBase64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceSftpKeyVaultPrivateKeyContentBase64List",
      },
      key_vault_private_key_passphrase: {
        value: dataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseToHclTerraform(this._keyVaultPrivateKeyPassphrase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceSftpKeyVaultPrivateKeyPassphraseList",
      },
      timeouts: {
        value: dataFactoryLinkedServiceSftpTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryLinkedServiceSftpTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
