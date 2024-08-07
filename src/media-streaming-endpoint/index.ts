/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}
  */
  readonly autoStartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}
  */
  readonly cdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}
  */
  readonly cdnProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}
  */
  readonly cdnProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}
  */
  readonly customHostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}
  */
  readonly maxCacheAgeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}
  */
  readonly scaleUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}
  */
  readonly accessControl?: MediaStreamingEndpointAccessControl;
  /**
  * cross_site_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}
  */
  readonly crossSiteAccessPolicy?: MediaStreamingEndpointCrossSiteAccessPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}
  */
  readonly timeouts?: MediaStreamingEndpointTimeouts;
}
export interface MediaStreamingEndpointSku {
}

export function mediaStreamingEndpointSkuToTerraform(struct?: MediaStreamingEndpointSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mediaStreamingEndpointSkuToHclTerraform(struct?: MediaStreamingEndpointSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MediaStreamingEndpointSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MediaStreamingEndpointSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingEndpointSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MediaStreamingEndpointSkuList extends cdktf.ComplexList {

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
  public get(index: number): MediaStreamingEndpointSkuOutputReference {
    return new MediaStreamingEndpointSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}
  */
  readonly base64Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}
  */
  readonly identifier?: string;
}

export function mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToTerraform(struct?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_key: cdktf.stringToTerraform(struct!.base64Key),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToHclTerraform(struct?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_key: {
      value: cdktf.stringToHclTerraform(struct!.base64Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Key = this._base64Key;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base64Key = undefined;
      this._expiration = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base64Key = value.base64Key;
      this._expiration = value.expiration;
      this._identifier = value.identifier;
    }
  }

  // base64_key - computed: false, optional: true, required: false
  private _base64Key?: string; 
  public get base64Key() {
    return this.getStringAttribute('base64_key');
  }
  public set base64Key(value: string) {
    this._base64Key = value;
  }
  public resetBase64Key() {
    this._base64Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64KeyInput() {
    return this._base64Key;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList extends cdktf.ComplexList {
  public internalValue? : MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[] | cdktf.IResolvable

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
  public get(index: number): MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference {
    return new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaStreamingEndpointAccessControlIpAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

export function mediaStreamingEndpointAccessControlIpAllowToTerraform(struct?: MediaStreamingEndpointAccessControlIpAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_prefix_length: cdktf.numberToTerraform(struct!.subnetPrefixLength),
  }
}


export function mediaStreamingEndpointAccessControlIpAllowToHclTerraform(struct?: MediaStreamingEndpointAccessControlIpAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    subnet_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.subnetPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaStreamingEndpointAccessControlIpAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaStreamingEndpointAccessControlIpAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetPrefixLength = this._subnetPrefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingEndpointAccessControlIpAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._subnetPrefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._subnetPrefixLength = value.subnetPrefixLength;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subnet_prefix_length - computed: false, optional: true, required: false
  private _subnetPrefixLength?: number; 
  public get subnetPrefixLength() {
    return this.getNumberAttribute('subnet_prefix_length');
  }
  public set subnetPrefixLength(value: number) {
    this._subnetPrefixLength = value;
  }
  public resetSubnetPrefixLength() {
    this._subnetPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPrefixLengthInput() {
    return this._subnetPrefixLength;
  }
}

export class MediaStreamingEndpointAccessControlIpAllowList extends cdktf.ComplexList {
  public internalValue? : MediaStreamingEndpointAccessControlIpAllow[] | cdktf.IResolvable

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
  public get(index: number): MediaStreamingEndpointAccessControlIpAllowOutputReference {
    return new MediaStreamingEndpointAccessControlIpAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaStreamingEndpointAccessControl {
  /**
  * akamai_signature_header_authentication_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}
  */
  readonly akamaiSignatureHeaderAuthenticationKey?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[] | cdktf.IResolvable;
  /**
  * ip_allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}
  */
  readonly ipAllow?: MediaStreamingEndpointAccessControlIpAllow[] | cdktf.IResolvable;
}

export function mediaStreamingEndpointAccessControlToTerraform(struct?: MediaStreamingEndpointAccessControlOutputReference | MediaStreamingEndpointAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akamai_signature_header_authentication_key: cdktf.listMapper(mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToTerraform, true)(struct!.akamaiSignatureHeaderAuthenticationKey),
    ip_allow: cdktf.listMapper(mediaStreamingEndpointAccessControlIpAllowToTerraform, true)(struct!.ipAllow),
  }
}


export function mediaStreamingEndpointAccessControlToHclTerraform(struct?: MediaStreamingEndpointAccessControlOutputReference | MediaStreamingEndpointAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akamai_signature_header_authentication_key: {
      value: cdktf.listMapperHcl(mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToHclTerraform, true)(struct!.akamaiSignatureHeaderAuthenticationKey),
      isBlock: true,
      type: "list",
      storageClassType: "MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList",
    },
    ip_allow: {
      value: cdktf.listMapperHcl(mediaStreamingEndpointAccessControlIpAllowToHclTerraform, true)(struct!.ipAllow),
      isBlock: true,
      type: "list",
      storageClassType: "MediaStreamingEndpointAccessControlIpAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaStreamingEndpointAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingEndpointAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akamaiSignatureHeaderAuthenticationKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.akamaiSignatureHeaderAuthenticationKey = this._akamaiSignatureHeaderAuthenticationKey?.internalValue;
    }
    if (this._ipAllow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllow = this._ipAllow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingEndpointAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._akamaiSignatureHeaderAuthenticationKey.internalValue = undefined;
      this._ipAllow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._akamaiSignatureHeaderAuthenticationKey.internalValue = value.akamaiSignatureHeaderAuthenticationKey;
      this._ipAllow.internalValue = value.ipAllow;
    }
  }

  // akamai_signature_header_authentication_key - computed: false, optional: true, required: false
  private _akamaiSignatureHeaderAuthenticationKey = new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList(this, "akamai_signature_header_authentication_key", false);
  public get akamaiSignatureHeaderAuthenticationKey() {
    return this._akamaiSignatureHeaderAuthenticationKey;
  }
  public putAkamaiSignatureHeaderAuthenticationKey(value: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[] | cdktf.IResolvable) {
    this._akamaiSignatureHeaderAuthenticationKey.internalValue = value;
  }
  public resetAkamaiSignatureHeaderAuthenticationKey() {
    this._akamaiSignatureHeaderAuthenticationKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiSignatureHeaderAuthenticationKeyInput() {
    return this._akamaiSignatureHeaderAuthenticationKey.internalValue;
  }

  // ip_allow - computed: false, optional: true, required: false
  private _ipAllow = new MediaStreamingEndpointAccessControlIpAllowList(this, "ip_allow", false);
  public get ipAllow() {
    return this._ipAllow;
  }
  public putIpAllow(value: MediaStreamingEndpointAccessControlIpAllow[] | cdktf.IResolvable) {
    this._ipAllow.internalValue = value;
  }
  public resetIpAllow() {
    this._ipAllow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowInput() {
    return this._ipAllow.internalValue;
  }
}
export interface MediaStreamingEndpointCrossSiteAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}
  */
  readonly clientAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}
  */
  readonly crossDomainPolicy?: string;
}

export function mediaStreamingEndpointCrossSiteAccessPolicyToTerraform(struct?: MediaStreamingEndpointCrossSiteAccessPolicyOutputReference | MediaStreamingEndpointCrossSiteAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_access_policy: cdktf.stringToTerraform(struct!.clientAccessPolicy),
    cross_domain_policy: cdktf.stringToTerraform(struct!.crossDomainPolicy),
  }
}


export function mediaStreamingEndpointCrossSiteAccessPolicyToHclTerraform(struct?: MediaStreamingEndpointCrossSiteAccessPolicyOutputReference | MediaStreamingEndpointCrossSiteAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_access_policy: {
      value: cdktf.stringToHclTerraform(struct!.clientAccessPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_domain_policy: {
      value: cdktf.stringToHclTerraform(struct!.crossDomainPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaStreamingEndpointCrossSiteAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingEndpointCrossSiteAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAccessPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAccessPolicy = this._clientAccessPolicy;
    }
    if (this._crossDomainPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossDomainPolicy = this._crossDomainPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingEndpointCrossSiteAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAccessPolicy = undefined;
      this._crossDomainPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAccessPolicy = value.clientAccessPolicy;
      this._crossDomainPolicy = value.crossDomainPolicy;
    }
  }

  // client_access_policy - computed: true, optional: true, required: false
  private _clientAccessPolicy?: string; 
  public get clientAccessPolicy() {
    return this.getStringAttribute('client_access_policy');
  }
  public set clientAccessPolicy(value: string) {
    this._clientAccessPolicy = value;
  }
  public resetClientAccessPolicy() {
    this._clientAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessPolicyInput() {
    return this._clientAccessPolicy;
  }

  // cross_domain_policy - computed: true, optional: true, required: false
  private _crossDomainPolicy?: string; 
  public get crossDomainPolicy() {
    return this.getStringAttribute('cross_domain_policy');
  }
  public set crossDomainPolicy(value: string) {
    this._crossDomainPolicy = value;
  }
  public resetCrossDomainPolicy() {
    this._crossDomainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDomainPolicyInput() {
    return this._crossDomainPolicy;
  }
}
export interface MediaStreamingEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}
  */
  readonly update?: string;
}

export function mediaStreamingEndpointTimeoutsToTerraform(struct?: MediaStreamingEndpointTimeouts | cdktf.IResolvable): any {
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


export function mediaStreamingEndpointTimeoutsToHclTerraform(struct?: MediaStreamingEndpointTimeouts | cdktf.IResolvable): any {
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

export class MediaStreamingEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaStreamingEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaStreamingEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint}
*/
export class MediaStreamingEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_streaming_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaStreamingEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaStreamingEndpoint to import
  * @param importFromId The id of the existing MediaStreamingEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaStreamingEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_media_streaming_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaStreamingEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MediaStreamingEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_streaming_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.115.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoStartEnabled = config.autoStartEnabled;
    this._cdnEnabled = config.cdnEnabled;
    this._cdnProfile = config.cdnProfile;
    this._cdnProvider = config.cdnProvider;
    this._customHostNames = config.customHostNames;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._maxCacheAgeSeconds = config.maxCacheAgeSeconds;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnits = config.scaleUnits;
    this._tags = config.tags;
    this._accessControl.internalValue = config.accessControl;
    this._crossSiteAccessPolicy.internalValue = config.crossSiteAccessPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start_enabled - computed: true, optional: true, required: false
  private _autoStartEnabled?: boolean | cdktf.IResolvable; 
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled');
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable) {
    this._autoStartEnabled = value;
  }
  public resetAutoStartEnabled() {
    this._autoStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartEnabledInput() {
    return this._autoStartEnabled;
  }

  // cdn_enabled - computed: false, optional: true, required: false
  private _cdnEnabled?: boolean | cdktf.IResolvable; 
  public get cdnEnabled() {
    return this.getBooleanAttribute('cdn_enabled');
  }
  public set cdnEnabled(value: boolean | cdktf.IResolvable) {
    this._cdnEnabled = value;
  }
  public resetCdnEnabled() {
    this._cdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEnabledInput() {
    return this._cdnEnabled;
  }

  // cdn_profile - computed: true, optional: true, required: false
  private _cdnProfile?: string; 
  public get cdnProfile() {
    return this.getStringAttribute('cdn_profile');
  }
  public set cdnProfile(value: string) {
    this._cdnProfile = value;
  }
  public resetCdnProfile() {
    this._cdnProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnProfileInput() {
    return this._cdnProfile;
  }

  // cdn_provider - computed: true, optional: true, required: false
  private _cdnProvider?: string; 
  public get cdnProvider() {
    return this.getStringAttribute('cdn_provider');
  }
  public set cdnProvider(value: string) {
    this._cdnProvider = value;
  }
  public resetCdnProvider() {
    this._cdnProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnProviderInput() {
    return this._cdnProvider;
  }

  // custom_host_names - computed: false, optional: true, required: false
  private _customHostNames?: string[]; 
  public get customHostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_host_names'));
  }
  public set customHostNames(value: string[]) {
    this._customHostNames = value;
  }
  public resetCustomHostNames() {
    this._customHostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostNamesInput() {
    return this._customHostNames;
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

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_cache_age_seconds - computed: false, optional: true, required: false
  private _maxCacheAgeSeconds?: number; 
  public get maxCacheAgeSeconds() {
    return this.getNumberAttribute('max_cache_age_seconds');
  }
  public set maxCacheAgeSeconds(value: number) {
    this._maxCacheAgeSeconds = value;
  }
  public resetMaxCacheAgeSeconds() {
    this._maxCacheAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheAgeSecondsInput() {
    return this._maxCacheAgeSeconds;
  }

  // media_services_account_name - computed: false, optional: false, required: true
  private _mediaServicesAccountName?: string; 
  public get mediaServicesAccountName() {
    return this.getStringAttribute('media_services_account_name');
  }
  public set mediaServicesAccountName(value: string) {
    this._mediaServicesAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaServicesAccountNameInput() {
    return this._mediaServicesAccountName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // scale_units - computed: false, optional: false, required: true
  private _scaleUnits?: number; 
  public get scaleUnits() {
    return this.getNumberAttribute('scale_units');
  }
  public set scaleUnits(value: number) {
    this._scaleUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitsInput() {
    return this._scaleUnits;
  }

  // sku - computed: true, optional: false, required: false
  private _sku = new MediaStreamingEndpointSkuList(this, "sku", false);
  public get sku() {
    return this._sku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new MediaStreamingEndpointAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: MediaStreamingEndpointAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // cross_site_access_policy - computed: false, optional: true, required: false
  private _crossSiteAccessPolicy = new MediaStreamingEndpointCrossSiteAccessPolicyOutputReference(this, "cross_site_access_policy");
  public get crossSiteAccessPolicy() {
    return this._crossSiteAccessPolicy;
  }
  public putCrossSiteAccessPolicy(value: MediaStreamingEndpointCrossSiteAccessPolicy) {
    this._crossSiteAccessPolicy.internalValue = value;
  }
  public resetCrossSiteAccessPolicy() {
    this._crossSiteAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteAccessPolicyInput() {
    return this._crossSiteAccessPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaStreamingEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaStreamingEndpointTimeouts) {
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
      auto_start_enabled: cdktf.booleanToTerraform(this._autoStartEnabled),
      cdn_enabled: cdktf.booleanToTerraform(this._cdnEnabled),
      cdn_profile: cdktf.stringToTerraform(this._cdnProfile),
      cdn_provider: cdktf.stringToTerraform(this._cdnProvider),
      custom_host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customHostNames),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_cache_age_seconds: cdktf.numberToTerraform(this._maxCacheAgeSeconds),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_units: cdktf.numberToTerraform(this._scaleUnits),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_control: mediaStreamingEndpointAccessControlToTerraform(this._accessControl.internalValue),
      cross_site_access_policy: mediaStreamingEndpointCrossSiteAccessPolicyToTerraform(this._crossSiteAccessPolicy.internalValue),
      timeouts: mediaStreamingEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_start_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoStartEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdn_enabled: {
        value: cdktf.booleanToHclTerraform(this._cdnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdn_profile: {
        value: cdktf.stringToHclTerraform(this._cdnProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_provider: {
        value: cdktf.stringToHclTerraform(this._cdnProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customHostNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cache_age_seconds: {
        value: cdktf.numberToHclTerraform(this._maxCacheAgeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      media_services_account_name: {
        value: cdktf.stringToHclTerraform(this._mediaServicesAccountName),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_units: {
        value: cdktf.numberToHclTerraform(this._scaleUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_control: {
        value: mediaStreamingEndpointAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaStreamingEndpointAccessControlList",
      },
      cross_site_access_policy: {
        value: mediaStreamingEndpointCrossSiteAccessPolicyToHclTerraform(this._crossSiteAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaStreamingEndpointCrossSiteAccessPolicyList",
      },
      timeouts: {
        value: mediaStreamingEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaStreamingEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
