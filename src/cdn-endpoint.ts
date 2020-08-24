// https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CdnEndpointConfig extends TerraformMetaArguments {
  readonly contentTypesToCompress?: string[];
  readonly isCompressionEnabled?: boolean;
  readonly isHttpAllowed?: boolean;
  readonly isHttpsAllowed?: boolean;
  readonly location: string;
  readonly name: string;
  readonly optimizationType?: string;
  readonly originHostHeader?: string;
  readonly originPath?: string;
  readonly probePath?: string;
  readonly profileName: string;
  readonly querystringCachingBehaviour?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** geo_filter block */
  readonly geoFilter?: CdnEndpointGeoFilter[];
  /** origin block */
  readonly origin: CdnEndpointOrigin[];
  /** timeouts block */
  readonly timeouts?: CdnEndpointTimeouts;
}
export interface CdnEndpointGeoFilter {
  readonly action: string;
  readonly countryCodes: string[];
  readonly relativePath: string;
}
export interface CdnEndpointOrigin {
  readonly hostName: string;
  readonly httpPort?: number;
  readonly httpsPort?: number;
  readonly name: string;
}
export interface CdnEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CdnEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CdnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentTypesToCompress = config.contentTypesToCompress;
    this._isCompressionEnabled = config.isCompressionEnabled;
    this._isHttpAllowed = config.isHttpAllowed;
    this._isHttpsAllowed = config.isHttpsAllowed;
    this._location = config.location;
    this._name = config.name;
    this._optimizationType = config.optimizationType;
    this._originHostHeader = config.originHostHeader;
    this._originPath = config.originPath;
    this._probePath = config.probePath;
    this._profileName = config.profileName;
    this._querystringCachingBehaviour = config.querystringCachingBehaviour;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._geoFilter = config.geoFilter;
    this._origin = config.origin;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_types_to_compress - computed: true, optional: true, required: false
  private _contentTypesToCompress?: string[];
  public get contentTypesToCompress() {
    return this._contentTypesToCompress ?? this.getListAttribute('content_types_to_compress');
  }
  public set contentTypesToCompress(value: string[] | undefined) {
    this._contentTypesToCompress = value;
  }

  // host_name - computed: true, optional: false, required: true
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_compression_enabled - computed: false, optional: true, required: false
  private _isCompressionEnabled?: boolean;
  public get isCompressionEnabled() {
    return this._isCompressionEnabled;
  }
  public set isCompressionEnabled(value: boolean | undefined) {
    this._isCompressionEnabled = value;
  }

  // is_http_allowed - computed: false, optional: true, required: false
  private _isHttpAllowed?: boolean;
  public get isHttpAllowed() {
    return this._isHttpAllowed;
  }
  public set isHttpAllowed(value: boolean | undefined) {
    this._isHttpAllowed = value;
  }

  // is_https_allowed - computed: false, optional: true, required: false
  private _isHttpsAllowed?: boolean;
  public get isHttpsAllowed() {
    return this._isHttpsAllowed;
  }
  public set isHttpsAllowed(value: boolean | undefined) {
    this._isHttpsAllowed = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // optimization_type - computed: false, optional: true, required: false
  private _optimizationType?: string;
  public get optimizationType() {
    return this._optimizationType;
  }
  public set optimizationType(value: string | undefined) {
    this._optimizationType = value;
  }

  // origin_host_header - computed: true, optional: true, required: false
  private _originHostHeader?: string;
  public get originHostHeader() {
    return this._originHostHeader ?? this.getStringAttribute('origin_host_header');
  }
  public set originHostHeader(value: string | undefined) {
    this._originHostHeader = value;
  }

  // origin_path - computed: true, optional: true, required: false
  private _originPath?: string;
  public get originPath() {
    return this._originPath ?? this.getStringAttribute('origin_path');
  }
  public set originPath(value: string | undefined) {
    this._originPath = value;
  }

  // probe_path - computed: true, optional: true, required: false
  private _probePath?: string;
  public get probePath() {
    return this._probePath ?? this.getStringAttribute('probe_path');
  }
  public set probePath(value: string | undefined) {
    this._probePath = value;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this._profileName;
  }
  public set profileName(value: string) {
    this._profileName = value;
  }

  // querystring_caching_behaviour - computed: false, optional: true, required: false
  private _querystringCachingBehaviour?: string;
  public get querystringCachingBehaviour() {
    return this._querystringCachingBehaviour;
  }
  public set querystringCachingBehaviour(value: string | undefined) {
    this._querystringCachingBehaviour = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // geo_filter - computed: false, optional: true, required: false
  private _geoFilter?: CdnEndpointGeoFilter[];
  public get geoFilter() {
    return this._geoFilter;
  }
  public set geoFilter(value: CdnEndpointGeoFilter[] | undefined) {
    this._geoFilter = value;
  }

  // origin - computed: false, optional: false, required: true
  private _origin: CdnEndpointOrigin[];
  public get origin() {
    return this._origin;
  }
  public set origin(value: CdnEndpointOrigin[]) {
    this._origin = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CdnEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CdnEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_types_to_compress: this._contentTypesToCompress,
      is_compression_enabled: this._isCompressionEnabled,
      is_http_allowed: this._isHttpAllowed,
      is_https_allowed: this._isHttpsAllowed,
      location: this._location,
      name: this._name,
      optimization_type: this._optimizationType,
      origin_host_header: this._originHostHeader,
      origin_path: this._originPath,
      probe_path: this._probePath,
      profile_name: this._profileName,
      querystring_caching_behaviour: this._querystringCachingBehaviour,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      geo_filter: this._geoFilter,
      origin: this._origin,
      timeouts: this._timeouts,
    };
  }
}
