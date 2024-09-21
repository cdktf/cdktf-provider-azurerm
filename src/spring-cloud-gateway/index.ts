// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}
  */
  readonly applicationPerformanceMonitoringIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}
  */
  readonly applicationPerformanceMonitoringTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}
  */
  readonly sensitiveEnvironmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}
  */
  readonly springCloudServiceId: string;
  /**
  * api_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}
  */
  readonly apiMetadata?: SpringCloudGatewayApiMetadata;
  /**
  * client_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}
  */
  readonly clientAuthorization?: SpringCloudGatewayClientAuthorization;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}
  */
  readonly cors?: SpringCloudGatewayCors;
  /**
  * local_response_cache_per_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#local_response_cache_per_instance SpringCloudGateway#local_response_cache_per_instance}
  */
  readonly localResponseCachePerInstance?: SpringCloudGatewayLocalResponseCachePerInstance;
  /**
  * local_response_cache_per_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#local_response_cache_per_route SpringCloudGateway#local_response_cache_per_route}
  */
  readonly localResponseCachePerRoute?: SpringCloudGatewayLocalResponseCachePerRoute;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}
  */
  readonly quota?: SpringCloudGatewayQuota;
  /**
  * sso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}
  */
  readonly sso?: SpringCloudGatewaySso;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}
  */
  readonly timeouts?: SpringCloudGatewayTimeouts;
}
export interface SpringCloudGatewayApiMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}
  */
  readonly documentationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}
  */
  readonly version?: string;
}

export function springCloudGatewayApiMetadataToTerraform(struct?: SpringCloudGatewayApiMetadataOutputReference | SpringCloudGatewayApiMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    documentation_url: cdktf.stringToTerraform(struct!.documentationUrl),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    title: cdktf.stringToTerraform(struct!.title),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function springCloudGatewayApiMetadataToHclTerraform(struct?: SpringCloudGatewayApiMetadataOutputReference | SpringCloudGatewayApiMetadata): any {
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
    documentation_url: {
      value: cdktf.stringToHclTerraform(struct!.documentationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayApiMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayApiMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._documentationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentationUrl = this._documentationUrl;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayApiMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._documentationUrl = undefined;
      this._serverUrl = undefined;
      this._title = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._documentationUrl = value.documentationUrl;
      this._serverUrl = value.serverUrl;
      this._title = value.title;
      this._version = value.version;
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

  // documentation_url - computed: false, optional: true, required: false
  private _documentationUrl?: string; 
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }
  public set documentationUrl(value: string) {
    this._documentationUrl = value;
  }
  public resetDocumentationUrl() {
    this._documentationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationUrlInput() {
    return this._documentationUrl;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SpringCloudGatewayClientAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}
  */
  readonly verificationEnabled?: boolean | cdktf.IResolvable;
}

export function springCloudGatewayClientAuthorizationToTerraform(struct?: SpringCloudGatewayClientAuthorizationOutputReference | SpringCloudGatewayClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    verification_enabled: cdktf.booleanToTerraform(struct!.verificationEnabled),
  }
}


export function springCloudGatewayClientAuthorizationToHclTerraform(struct?: SpringCloudGatewayClientAuthorizationOutputReference | SpringCloudGatewayClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verification_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.verificationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayClientAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayClientAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._verificationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationEnabled = this._verificationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayClientAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._verificationEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._verificationEnabled = value.verificationEnabled;
    }
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // verification_enabled - computed: false, optional: true, required: false
  private _verificationEnabled?: boolean | cdktf.IResolvable; 
  public get verificationEnabled() {
    return this.getBooleanAttribute('verification_enabled');
  }
  public set verificationEnabled(value: boolean | cdktf.IResolvable) {
    this._verificationEnabled = value;
  }
  public resetVerificationEnabled() {
    this._verificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationEnabledInput() {
    return this._verificationEnabled;
  }
}
export interface SpringCloudGatewayCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}
  */
  readonly allowedOriginPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}
  */
  readonly credentialsAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function springCloudGatewayCorsToTerraform(struct?: SpringCloudGatewayCorsOutputReference | SpringCloudGatewayCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origin_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOriginPatterns),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    credentials_allowed: cdktf.booleanToTerraform(struct!.credentialsAllowed),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function springCloudGatewayCorsToHclTerraform(struct?: SpringCloudGatewayCorsOutputReference | SpringCloudGatewayCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_origin_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOriginPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    credentials_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.credentialsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOriginPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOriginPatterns = this._allowedOriginPatterns;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._credentialsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsAllowed = this._credentialsAllowed;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOriginPatterns = undefined;
      this._allowedOrigins = undefined;
      this._credentialsAllowed = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOriginPatterns = value.allowedOriginPatterns;
      this._allowedOrigins = value.allowedOrigins;
      this._credentialsAllowed = value.credentialsAllowed;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_headers'));
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origin_patterns - computed: false, optional: true, required: false
  private _allowedOriginPatterns?: string[]; 
  public get allowedOriginPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origin_patterns'));
  }
  public set allowedOriginPatterns(value: string[]) {
    this._allowedOriginPatterns = value;
  }
  public resetAllowedOriginPatterns() {
    this._allowedOriginPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginPatternsInput() {
    return this._allowedOriginPatterns;
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // credentials_allowed - computed: false, optional: true, required: false
  private _credentialsAllowed?: boolean | cdktf.IResolvable; 
  public get credentialsAllowed() {
    return this.getBooleanAttribute('credentials_allowed');
  }
  public set credentialsAllowed(value: boolean | cdktf.IResolvable) {
    this._credentialsAllowed = value;
  }
  public resetCredentialsAllowed() {
    this._credentialsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsAllowedInput() {
    return this._credentialsAllowed;
  }

  // exposed_headers - computed: false, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('exposed_headers'));
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}
export interface SpringCloudGatewayLocalResponseCachePerInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}
  */
  readonly timeToLive?: string;
}

export function springCloudGatewayLocalResponseCachePerInstanceToTerraform(struct?: SpringCloudGatewayLocalResponseCachePerInstanceOutputReference | SpringCloudGatewayLocalResponseCachePerInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    time_to_live: cdktf.stringToTerraform(struct!.timeToLive),
  }
}


export function springCloudGatewayLocalResponseCachePerInstanceToHclTerraform(struct?: SpringCloudGatewayLocalResponseCachePerInstanceOutputReference | SpringCloudGatewayLocalResponseCachePerInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live: {
      value: cdktf.stringToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayLocalResponseCachePerInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayLocalResponseCachePerInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayLocalResponseCachePerInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._timeToLive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._timeToLive = value.timeToLive;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: string; 
  public get timeToLive() {
    return this.getStringAttribute('time_to_live');
  }
  public set timeToLive(value: string) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface SpringCloudGatewayLocalResponseCachePerRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}
  */
  readonly timeToLive?: string;
}

export function springCloudGatewayLocalResponseCachePerRouteToTerraform(struct?: SpringCloudGatewayLocalResponseCachePerRouteOutputReference | SpringCloudGatewayLocalResponseCachePerRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    time_to_live: cdktf.stringToTerraform(struct!.timeToLive),
  }
}


export function springCloudGatewayLocalResponseCachePerRouteToHclTerraform(struct?: SpringCloudGatewayLocalResponseCachePerRouteOutputReference | SpringCloudGatewayLocalResponseCachePerRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live: {
      value: cdktf.stringToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayLocalResponseCachePerRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayLocalResponseCachePerRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayLocalResponseCachePerRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._timeToLive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._timeToLive = value.timeToLive;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: string; 
  public get timeToLive() {
    return this.getStringAttribute('time_to_live');
  }
  public set timeToLive(value: string) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface SpringCloudGatewayQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}
  */
  readonly memory?: string;
}

export function springCloudGatewayQuotaToTerraform(struct?: SpringCloudGatewayQuotaOutputReference | SpringCloudGatewayQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function springCloudGatewayQuotaToHclTerraform(struct?: SpringCloudGatewayQuotaOutputReference | SpringCloudGatewayQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface SpringCloudGatewaySso {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}
  */
  readonly issuerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}
  */
  readonly scope?: string[];
}

export function springCloudGatewaySsoToTerraform(struct?: SpringCloudGatewaySsoOutputReference | SpringCloudGatewaySso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function springCloudGatewaySsoToHclTerraform(struct?: SpringCloudGatewaySsoOutputReference | SpringCloudGatewaySso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_uri: {
      value: cdktf.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewaySsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewaySso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewaySso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuerUri = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuerUri = value.issuerUri;
      this._scope = value.scope;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer_uri - computed: false, optional: true, required: false
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  public resetIssuerUri() {
    this._issuerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface SpringCloudGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}
  */
  readonly update?: string;
}

export function springCloudGatewayTimeoutsToTerraform(struct?: SpringCloudGatewayTimeouts | cdktf.IResolvable): any {
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


export function springCloudGatewayTimeoutsToHclTerraform(struct?: SpringCloudGatewayTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway}
*/
export class SpringCloudGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudGateway to import
  * @param importFromId The id of the existing SpringCloudGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
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
    this._applicationPerformanceMonitoringIds = config.applicationPerformanceMonitoringIds;
    this._applicationPerformanceMonitoringTypes = config.applicationPerformanceMonitoringTypes;
    this._environmentVariables = config.environmentVariables;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._sensitiveEnvironmentVariables = config.sensitiveEnvironmentVariables;
    this._springCloudServiceId = config.springCloudServiceId;
    this._apiMetadata.internalValue = config.apiMetadata;
    this._clientAuthorization.internalValue = config.clientAuthorization;
    this._cors.internalValue = config.cors;
    this._localResponseCachePerInstance.internalValue = config.localResponseCachePerInstance;
    this._localResponseCachePerRoute.internalValue = config.localResponseCachePerRoute;
    this._quota.internalValue = config.quota;
    this._sso.internalValue = config.sso;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_performance_monitoring_ids - computed: false, optional: true, required: false
  private _applicationPerformanceMonitoringIds?: string[]; 
  public get applicationPerformanceMonitoringIds() {
    return this.getListAttribute('application_performance_monitoring_ids');
  }
  public set applicationPerformanceMonitoringIds(value: string[]) {
    this._applicationPerformanceMonitoringIds = value;
  }
  public resetApplicationPerformanceMonitoringIds() {
    this._applicationPerformanceMonitoringIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPerformanceMonitoringIdsInput() {
    return this._applicationPerformanceMonitoringIds;
  }

  // application_performance_monitoring_types - computed: false, optional: true, required: false
  private _applicationPerformanceMonitoringTypes?: string[]; 
  public get applicationPerformanceMonitoringTypes() {
    return this.getListAttribute('application_performance_monitoring_types');
  }
  public set applicationPerformanceMonitoringTypes(value: string[]) {
    this._applicationPerformanceMonitoringTypes = value;
  }
  public resetApplicationPerformanceMonitoringTypes() {
    this._applicationPerformanceMonitoringTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPerformanceMonitoringTypesInput() {
    return this._applicationPerformanceMonitoringTypes;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly;
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

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // sensitive_environment_variables - computed: false, optional: true, required: false
  private _sensitiveEnvironmentVariables?: { [key: string]: string }; 
  public get sensitiveEnvironmentVariables() {
    return this.getStringMapAttribute('sensitive_environment_variables');
  }
  public set sensitiveEnvironmentVariables(value: { [key: string]: string }) {
    this._sensitiveEnvironmentVariables = value;
  }
  public resetSensitiveEnvironmentVariables() {
    this._sensitiveEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEnvironmentVariablesInput() {
    return this._sensitiveEnvironmentVariables;
  }

  // spring_cloud_service_id - computed: false, optional: false, required: true
  private _springCloudServiceId?: string; 
  public get springCloudServiceId() {
    return this.getStringAttribute('spring_cloud_service_id');
  }
  public set springCloudServiceId(value: string) {
    this._springCloudServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudServiceIdInput() {
    return this._springCloudServiceId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // api_metadata - computed: false, optional: true, required: false
  private _apiMetadata = new SpringCloudGatewayApiMetadataOutputReference(this, "api_metadata");
  public get apiMetadata() {
    return this._apiMetadata;
  }
  public putApiMetadata(value: SpringCloudGatewayApiMetadata) {
    this._apiMetadata.internalValue = value;
  }
  public resetApiMetadata() {
    this._apiMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMetadataInput() {
    return this._apiMetadata.internalValue;
  }

  // client_authorization - computed: false, optional: true, required: false
  private _clientAuthorization = new SpringCloudGatewayClientAuthorizationOutputReference(this, "client_authorization");
  public get clientAuthorization() {
    return this._clientAuthorization;
  }
  public putClientAuthorization(value: SpringCloudGatewayClientAuthorization) {
    this._clientAuthorization.internalValue = value;
  }
  public resetClientAuthorization() {
    this._clientAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthorizationInput() {
    return this._clientAuthorization.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new SpringCloudGatewayCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: SpringCloudGatewayCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // local_response_cache_per_instance - computed: false, optional: true, required: false
  private _localResponseCachePerInstance = new SpringCloudGatewayLocalResponseCachePerInstanceOutputReference(this, "local_response_cache_per_instance");
  public get localResponseCachePerInstance() {
    return this._localResponseCachePerInstance;
  }
  public putLocalResponseCachePerInstance(value: SpringCloudGatewayLocalResponseCachePerInstance) {
    this._localResponseCachePerInstance.internalValue = value;
  }
  public resetLocalResponseCachePerInstance() {
    this._localResponseCachePerInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResponseCachePerInstanceInput() {
    return this._localResponseCachePerInstance.internalValue;
  }

  // local_response_cache_per_route - computed: false, optional: true, required: false
  private _localResponseCachePerRoute = new SpringCloudGatewayLocalResponseCachePerRouteOutputReference(this, "local_response_cache_per_route");
  public get localResponseCachePerRoute() {
    return this._localResponseCachePerRoute;
  }
  public putLocalResponseCachePerRoute(value: SpringCloudGatewayLocalResponseCachePerRoute) {
    this._localResponseCachePerRoute.internalValue = value;
  }
  public resetLocalResponseCachePerRoute() {
    this._localResponseCachePerRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResponseCachePerRouteInput() {
    return this._localResponseCachePerRoute.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new SpringCloudGatewayQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: SpringCloudGatewayQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // sso - computed: false, optional: true, required: false
  private _sso = new SpringCloudGatewaySsoOutputReference(this, "sso");
  public get sso() {
    return this._sso;
  }
  public putSso(value: SpringCloudGatewaySso) {
    this._sso.internalValue = value;
  }
  public resetSso() {
    this._sso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudGatewayTimeouts) {
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
      application_performance_monitoring_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationPerformanceMonitoringIds),
      application_performance_monitoring_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationPerformanceMonitoringTypes),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      sensitive_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEnvironmentVariables),
      spring_cloud_service_id: cdktf.stringToTerraform(this._springCloudServiceId),
      api_metadata: springCloudGatewayApiMetadataToTerraform(this._apiMetadata.internalValue),
      client_authorization: springCloudGatewayClientAuthorizationToTerraform(this._clientAuthorization.internalValue),
      cors: springCloudGatewayCorsToTerraform(this._cors.internalValue),
      local_response_cache_per_instance: springCloudGatewayLocalResponseCachePerInstanceToTerraform(this._localResponseCachePerInstance.internalValue),
      local_response_cache_per_route: springCloudGatewayLocalResponseCachePerRouteToTerraform(this._localResponseCachePerRoute.internalValue),
      quota: springCloudGatewayQuotaToTerraform(this._quota.internalValue),
      sso: springCloudGatewaySsoToTerraform(this._sso.internalValue),
      timeouts: springCloudGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_performance_monitoring_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationPerformanceMonitoringIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      application_performance_monitoring_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationPerformanceMonitoringTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      https_only: {
        value: cdktf.booleanToHclTerraform(this._httpsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensitive_environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEnvironmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      spring_cloud_service_id: {
        value: cdktf.stringToHclTerraform(this._springCloudServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_metadata: {
        value: springCloudGatewayApiMetadataToHclTerraform(this._apiMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayApiMetadataList",
      },
      client_authorization: {
        value: springCloudGatewayClientAuthorizationToHclTerraform(this._clientAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayClientAuthorizationList",
      },
      cors: {
        value: springCloudGatewayCorsToHclTerraform(this._cors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayCorsList",
      },
      local_response_cache_per_instance: {
        value: springCloudGatewayLocalResponseCachePerInstanceToHclTerraform(this._localResponseCachePerInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayLocalResponseCachePerInstanceList",
      },
      local_response_cache_per_route: {
        value: springCloudGatewayLocalResponseCachePerRouteToHclTerraform(this._localResponseCachePerRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayLocalResponseCachePerRouteList",
      },
      quota: {
        value: springCloudGatewayQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayQuotaList",
      },
      sso: {
        value: springCloudGatewaySsoToHclTerraform(this._sso.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewaySsoList",
      },
      timeouts: {
        value: springCloudGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
