// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}
  */
  readonly autoStartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#cdn_enabled MediaStreamingEndpoint#cdn_enabled}
  */
  readonly cdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#cdn_profile MediaStreamingEndpoint#cdn_profile}
  */
  readonly cdnProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#cdn_provider MediaStreamingEndpoint#cdn_provider}
  */
  readonly cdnProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#custom_host_names MediaStreamingEndpoint#custom_host_names}
  */
  readonly customHostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#description MediaStreamingEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#location MediaStreamingEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}
  */
  readonly maxCacheAgeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#media_services_account_name MediaStreamingEndpoint#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#name MediaStreamingEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#resource_group_name MediaStreamingEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#scale_units MediaStreamingEndpoint#scale_units}
  */
  readonly scaleUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#tags MediaStreamingEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#access_control MediaStreamingEndpoint#access_control}
  */
  readonly accessControl?: MediaStreamingEndpointAccessControl;
  /**
  * cross_site_access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}
  */
  readonly crossSiteAccessPolicy?: MediaStreamingEndpointCrossSiteAccessPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#timeouts MediaStreamingEndpoint#timeouts}
  */
  readonly timeouts?: MediaStreamingEndpointTimeouts;
}
export interface MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#base64_key MediaStreamingEndpoint#base64_key}
  */
  readonly base64Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#expiration MediaStreamingEndpoint#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#identifier MediaStreamingEndpoint#identifier}
  */
  readonly identifier?: string;
}

function mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToTerraform(struct?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_key: cdktf.stringToTerraform(struct!.base64Key),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}

export interface MediaStreamingEndpointAccessControlIpAllow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#address MediaStreamingEndpoint#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#name MediaStreamingEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

function mediaStreamingEndpointAccessControlIpAllowToTerraform(struct?: MediaStreamingEndpointAccessControlIpAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_prefix_length: cdktf.numberToTerraform(struct!.subnetPrefixLength),
  }
}

export interface MediaStreamingEndpointAccessControl {
  /**
  * akamai_signature_header_authentication_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}
  */
  readonly akamaiSignatureHeaderAuthenticationKey?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[];
  /**
  * ip_allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#ip_allow MediaStreamingEndpoint#ip_allow}
  */
  readonly ipAllow?: MediaStreamingEndpointAccessControlIpAllow[];
}

function mediaStreamingEndpointAccessControlToTerraform(struct?: MediaStreamingEndpointAccessControlOutputReference | MediaStreamingEndpointAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akamai_signature_header_authentication_key: cdktf.listMapper(mediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyToTerraform)(struct!.akamaiSignatureHeaderAuthenticationKey),
    ip_allow: cdktf.listMapper(mediaStreamingEndpointAccessControlIpAllowToTerraform)(struct!.ipAllow),
  }
}

export class MediaStreamingEndpointAccessControlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // akamai_signature_header_authentication_key - computed: false, optional: true, required: false
  private _akamaiSignatureHeaderAuthenticationKey?: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[] | undefined; 
  public get akamaiSignatureHeaderAuthenticationKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('akamai_signature_header_authentication_key') as any;
  }
  public set akamaiSignatureHeaderAuthenticationKey(value: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey[] | undefined) {
    this._akamaiSignatureHeaderAuthenticationKey = value;
  }
  public resetAkamaiSignatureHeaderAuthenticationKey() {
    this._akamaiSignatureHeaderAuthenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiSignatureHeaderAuthenticationKeyInput() {
    return this._akamaiSignatureHeaderAuthenticationKey
  }

  // ip_allow - computed: false, optional: true, required: false
  private _ipAllow?: MediaStreamingEndpointAccessControlIpAllow[] | undefined; 
  public get ipAllow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_allow') as any;
  }
  public set ipAllow(value: MediaStreamingEndpointAccessControlIpAllow[] | undefined) {
    this._ipAllow = value;
  }
  public resetIpAllow() {
    this._ipAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowInput() {
    return this._ipAllow
  }
}
export interface MediaStreamingEndpointCrossSiteAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#client_access_policy MediaStreamingEndpoint#client_access_policy}
  */
  readonly clientAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}
  */
  readonly crossDomainPolicy?: string;
}

function mediaStreamingEndpointCrossSiteAccessPolicyToTerraform(struct?: MediaStreamingEndpointCrossSiteAccessPolicyOutputReference | MediaStreamingEndpointCrossSiteAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_access_policy: cdktf.stringToTerraform(struct!.clientAccessPolicy),
    cross_domain_policy: cdktf.stringToTerraform(struct!.crossDomainPolicy),
  }
}

export class MediaStreamingEndpointCrossSiteAccessPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_access_policy - computed: true, optional: true, required: false
  private _clientAccessPolicy?: string | undefined; 
  public get clientAccessPolicy() {
    return this.getStringAttribute('client_access_policy');
  }
  public set clientAccessPolicy(value: string | undefined) {
    this._clientAccessPolicy = value;
  }
  public resetClientAccessPolicy() {
    this._clientAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessPolicyInput() {
    return this._clientAccessPolicy
  }

  // cross_domain_policy - computed: true, optional: true, required: false
  private _crossDomainPolicy?: string | undefined; 
  public get crossDomainPolicy() {
    return this.getStringAttribute('cross_domain_policy');
  }
  public set crossDomainPolicy(value: string | undefined) {
    this._crossDomainPolicy = value;
  }
  public resetCrossDomainPolicy() {
    this._crossDomainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDomainPolicyInput() {
    return this._crossDomainPolicy
  }
}
export interface MediaStreamingEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#create MediaStreamingEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#delete MediaStreamingEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#read MediaStreamingEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html#update MediaStreamingEndpoint#update}
  */
  readonly update?: string;
}

function mediaStreamingEndpointTimeoutsToTerraform(struct?: MediaStreamingEndpointTimeoutsOutputReference | MediaStreamingEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class MediaStreamingEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html azurerm_media_streaming_endpoint}
*/
export class MediaStreamingEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_streaming_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_endpoint.html azurerm_media_streaming_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaStreamingEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MediaStreamingEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_streaming_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStartEnabled = config.autoStartEnabled;
    this._cdnEnabled = config.cdnEnabled;
    this._cdnProfile = config.cdnProfile;
    this._cdnProvider = config.cdnProvider;
    this._customHostNames = config.customHostNames;
    this._description = config.description;
    this._location = config.location;
    this._maxCacheAgeSeconds = config.maxCacheAgeSeconds;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnits = config.scaleUnits;
    this._tags = config.tags;
    this._accessControl = config.accessControl;
    this._crossSiteAccessPolicy = config.crossSiteAccessPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start_enabled - computed: true, optional: true, required: false
  private _autoStartEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled') as any;
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._autoStartEnabled = value;
  }
  public resetAutoStartEnabled() {
    this._autoStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartEnabledInput() {
    return this._autoStartEnabled
  }

  // cdn_enabled - computed: false, optional: true, required: false
  private _cdnEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cdnEnabled() {
    return this.getBooleanAttribute('cdn_enabled') as any;
  }
  public set cdnEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cdnEnabled = value;
  }
  public resetCdnEnabled() {
    this._cdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEnabledInput() {
    return this._cdnEnabled
  }

  // cdn_profile - computed: true, optional: true, required: false
  private _cdnProfile?: string | undefined; 
  public get cdnProfile() {
    return this.getStringAttribute('cdn_profile');
  }
  public set cdnProfile(value: string | undefined) {
    this._cdnProfile = value;
  }
  public resetCdnProfile() {
    this._cdnProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnProfileInput() {
    return this._cdnProfile
  }

  // cdn_provider - computed: true, optional: true, required: false
  private _cdnProvider?: string | undefined; 
  public get cdnProvider() {
    return this.getStringAttribute('cdn_provider');
  }
  public set cdnProvider(value: string | undefined) {
    this._cdnProvider = value;
  }
  public resetCdnProvider() {
    this._cdnProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnProviderInput() {
    return this._cdnProvider
  }

  // custom_host_names - computed: false, optional: true, required: false
  private _customHostNames?: string[] | undefined; 
  public get customHostNames() {
    return this.getListAttribute('custom_host_names');
  }
  public set customHostNames(value: string[] | undefined) {
    this._customHostNames = value;
  }
  public resetCustomHostNames() {
    this._customHostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostNamesInput() {
    return this._customHostNames
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._location
  }

  // max_cache_age_seconds - computed: false, optional: true, required: false
  private _maxCacheAgeSeconds?: number | undefined; 
  public get maxCacheAgeSeconds() {
    return this.getNumberAttribute('max_cache_age_seconds');
  }
  public set maxCacheAgeSeconds(value: number | undefined) {
    this._maxCacheAgeSeconds = value;
  }
  public resetMaxCacheAgeSeconds() {
    this._maxCacheAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheAgeSecondsInput() {
    return this._maxCacheAgeSeconds
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
    return this._mediaServicesAccountName
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
    return this._name
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
    return this._resourceGroupName
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
    return this._scaleUnits
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl?: MediaStreamingEndpointAccessControl | undefined; 
  private __accessControlOutput = new MediaStreamingEndpointAccessControlOutputReference(this as any, "access_control", true);
  public get accessControl() {
    return this.__accessControlOutput;
  }
  public putAccessControl(value: MediaStreamingEndpointAccessControl | undefined) {
    this._accessControl = value;
  }
  public resetAccessControl() {
    this._accessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl
  }

  // cross_site_access_policy - computed: false, optional: true, required: false
  private _crossSiteAccessPolicy?: MediaStreamingEndpointCrossSiteAccessPolicy | undefined; 
  private __crossSiteAccessPolicyOutput = new MediaStreamingEndpointCrossSiteAccessPolicyOutputReference(this as any, "cross_site_access_policy", true);
  public get crossSiteAccessPolicy() {
    return this.__crossSiteAccessPolicyOutput;
  }
  public putCrossSiteAccessPolicy(value: MediaStreamingEndpointCrossSiteAccessPolicy | undefined) {
    this._crossSiteAccessPolicy = value;
  }
  public resetCrossSiteAccessPolicy() {
    this._crossSiteAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteAccessPolicyInput() {
    return this._crossSiteAccessPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaStreamingEndpointTimeouts | undefined; 
  private __timeoutsOutput = new MediaStreamingEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaStreamingEndpointTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      custom_host_names: cdktf.listMapper(cdktf.stringToTerraform)(this._customHostNames),
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      max_cache_age_seconds: cdktf.numberToTerraform(this._maxCacheAgeSeconds),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_units: cdktf.numberToTerraform(this._scaleUnits),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      access_control: mediaStreamingEndpointAccessControlToTerraform(this._accessControl),
      cross_site_access_policy: mediaStreamingEndpointCrossSiteAccessPolicyToTerraform(this._crossSiteAccessPolicy),
      timeouts: mediaStreamingEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
