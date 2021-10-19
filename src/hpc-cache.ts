// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#cache_size_in_gb HpcCache#cache_size_in_gb}
  */
  readonly cacheSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#location HpcCache#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#mtu HpcCache#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#name HpcCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#ntp_server HpcCache#ntp_server}
  */
  readonly ntpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#resource_group_name HpcCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#root_squash_enabled HpcCache#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#sku_name HpcCache#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#subnet_id HpcCache#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#tags HpcCache#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#default_access_policy HpcCache#default_access_policy}
  */
  readonly defaultAccessPolicy?: HpcCacheDefaultAccessPolicy;
  /**
  * directory_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#directory_active_directory HpcCache#directory_active_directory}
  */
  readonly directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory;
  /**
  * directory_flat_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#directory_flat_file HpcCache#directory_flat_file}
  */
  readonly directoryFlatFile?: HpcCacheDirectoryFlatFile;
  /**
  * directory_ldap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#directory_ldap HpcCache#directory_ldap}
  */
  readonly directoryLdap?: HpcCacheDirectoryLdap;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#dns HpcCache#dns}
  */
  readonly dns?: HpcCacheDns;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#timeouts HpcCache#timeouts}
  */
  readonly timeouts?: HpcCacheTimeouts;
}
export interface HpcCacheDefaultAccessPolicyAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#access HpcCache#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#anonymous_gid HpcCache#anonymous_gid}
  */
  readonly anonymousGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#anonymous_uid HpcCache#anonymous_uid}
  */
  readonly anonymousUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#filter HpcCache#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#root_squash_enabled HpcCache#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#scope HpcCache#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#submount_access_enabled HpcCache#submount_access_enabled}
  */
  readonly submountAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#suid_enabled HpcCache#suid_enabled}
  */
  readonly suidEnabled?: boolean | cdktf.IResolvable;
}

function hpcCacheDefaultAccessPolicyAccessRuleToTerraform(struct?: HpcCacheDefaultAccessPolicyAccessRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}

export interface HpcCacheDefaultAccessPolicy {
  /**
  * access_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#access_rule HpcCache#access_rule}
  */
  readonly accessRule: HpcCacheDefaultAccessPolicyAccessRule[];
}

function hpcCacheDefaultAccessPolicyToTerraform(struct?: HpcCacheDefaultAccessPolicyOutputReference | HpcCacheDefaultAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_rule: cdktf.listMapper(hpcCacheDefaultAccessPolicyAccessRuleToTerraform)(struct!.accessRule),
  }
}

export class HpcCacheDefaultAccessPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_rule - computed: false, optional: false, required: true
  private _accessRule?: HpcCacheDefaultAccessPolicyAccessRule[]; 
  public get accessRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_rule') as any;
  }
  public set accessRule(value: HpcCacheDefaultAccessPolicyAccessRule[]) {
    this._accessRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule
  }
}
export interface HpcCacheDirectoryActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#cache_netbios_name HpcCache#cache_netbios_name}
  */
  readonly cacheNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#dns_primary_ip HpcCache#dns_primary_ip}
  */
  readonly dnsPrimaryIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#dns_secondary_ip HpcCache#dns_secondary_ip}
  */
  readonly dnsSecondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#domain_name HpcCache#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#domain_netbios_name HpcCache#domain_netbios_name}
  */
  readonly domainNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#password HpcCache#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#username HpcCache#username}
  */
  readonly username: string;
}

function hpcCacheDirectoryActiveDirectoryToTerraform(struct?: HpcCacheDirectoryActiveDirectoryOutputReference | HpcCacheDirectoryActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_netbios_name: cdktf.stringToTerraform(struct!.cacheNetbiosName),
    dns_primary_ip: cdktf.stringToTerraform(struct!.dnsPrimaryIp),
    dns_secondary_ip: cdktf.stringToTerraform(struct!.dnsSecondaryIp),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_netbios_name: cdktf.stringToTerraform(struct!.domainNetbiosName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HpcCacheDirectoryActiveDirectoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cache_netbios_name - computed: false, optional: false, required: true
  private _cacheNetbiosName?: string; 
  public get cacheNetbiosName() {
    return this.getStringAttribute('cache_netbios_name');
  }
  public set cacheNetbiosName(value: string) {
    this._cacheNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNetbiosNameInput() {
    return this._cacheNetbiosName
  }

  // dns_primary_ip - computed: false, optional: false, required: true
  private _dnsPrimaryIp?: string; 
  public get dnsPrimaryIp() {
    return this.getStringAttribute('dns_primary_ip');
  }
  public set dnsPrimaryIp(value: string) {
    this._dnsPrimaryIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryIpInput() {
    return this._dnsPrimaryIp
  }

  // dns_secondary_ip - computed: false, optional: true, required: false
  private _dnsSecondaryIp?: string | undefined; 
  public get dnsSecondaryIp() {
    return this.getStringAttribute('dns_secondary_ip');
  }
  public set dnsSecondaryIp(value: string | undefined) {
    this._dnsSecondaryIp = value;
  }
  public resetDnsSecondaryIp() {
    this._dnsSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryIpInput() {
    return this._dnsSecondaryIp
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_netbios_name - computed: false, optional: false, required: true
  private _domainNetbiosName?: string; 
  public get domainNetbiosName() {
    return this.getStringAttribute('domain_netbios_name');
  }
  public set domainNetbiosName(value: string) {
    this._domainNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNetbiosNameInput() {
    return this._domainNetbiosName
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
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
    return this._username
  }
}
export interface HpcCacheDirectoryFlatFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#group_file_uri HpcCache#group_file_uri}
  */
  readonly groupFileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#password_file_uri HpcCache#password_file_uri}
  */
  readonly passwordFileUri: string;
}

function hpcCacheDirectoryFlatFileToTerraform(struct?: HpcCacheDirectoryFlatFileOutputReference | HpcCacheDirectoryFlatFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_file_uri: cdktf.stringToTerraform(struct!.groupFileUri),
    password_file_uri: cdktf.stringToTerraform(struct!.passwordFileUri),
  }
}

export class HpcCacheDirectoryFlatFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group_file_uri - computed: false, optional: false, required: true
  private _groupFileUri?: string; 
  public get groupFileUri() {
    return this.getStringAttribute('group_file_uri');
  }
  public set groupFileUri(value: string) {
    this._groupFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFileUriInput() {
    return this._groupFileUri
  }

  // password_file_uri - computed: false, optional: false, required: true
  private _passwordFileUri?: string; 
  public get passwordFileUri() {
    return this.getStringAttribute('password_file_uri');
  }
  public set passwordFileUri(value: string) {
    this._passwordFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileUriInput() {
    return this._passwordFileUri
  }
}
export interface HpcCacheDirectoryLdapBind {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#dn HpcCache#dn}
  */
  readonly dn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#password HpcCache#password}
  */
  readonly password: string;
}

function hpcCacheDirectoryLdapBindToTerraform(struct?: HpcCacheDirectoryLdapBindOutputReference | HpcCacheDirectoryLdapBind): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export class HpcCacheDirectoryLdapBindOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }
}
export interface HpcCacheDirectoryLdap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#base_dn HpcCache#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#certificate_validation_uri HpcCache#certificate_validation_uri}
  */
  readonly certificateValidationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#download_certificate_automatically HpcCache#download_certificate_automatically}
  */
  readonly downloadCertificateAutomatically?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#encrypted HpcCache#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#server HpcCache#server}
  */
  readonly server: string;
  /**
  * bind block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#bind HpcCache#bind}
  */
  readonly bind?: HpcCacheDirectoryLdapBind;
}

function hpcCacheDirectoryLdapToTerraform(struct?: HpcCacheDirectoryLdapOutputReference | HpcCacheDirectoryLdap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    certificate_validation_uri: cdktf.stringToTerraform(struct!.certificateValidationUri),
    download_certificate_automatically: cdktf.booleanToTerraform(struct!.downloadCertificateAutomatically),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    server: cdktf.stringToTerraform(struct!.server),
    bind: hpcCacheDirectoryLdapBindToTerraform(struct!.bind),
  }
}

export class HpcCacheDirectoryLdapOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn
  }

  // certificate_validation_uri - computed: false, optional: true, required: false
  private _certificateValidationUri?: string | undefined; 
  public get certificateValidationUri() {
    return this.getStringAttribute('certificate_validation_uri');
  }
  public set certificateValidationUri(value: string | undefined) {
    this._certificateValidationUri = value;
  }
  public resetCertificateValidationUri() {
    this._certificateValidationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationUriInput() {
    return this._certificateValidationUri
  }

  // download_certificate_automatically - computed: false, optional: true, required: false
  private _downloadCertificateAutomatically?: boolean | cdktf.IResolvable | undefined; 
  public get downloadCertificateAutomatically() {
    return this.getBooleanAttribute('download_certificate_automatically') as any;
  }
  public set downloadCertificateAutomatically(value: boolean | cdktf.IResolvable | undefined) {
    this._downloadCertificateAutomatically = value;
  }
  public resetDownloadCertificateAutomatically() {
    this._downloadCertificateAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCertificateAutomaticallyInput() {
    return this._downloadCertificateAutomatically
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable | undefined; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }
  public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: HpcCacheDirectoryLdapBind | undefined; 
  private __bindOutput = new HpcCacheDirectoryLdapBindOutputReference(this as any, "bind", true);
  public get bind() {
    return this.__bindOutput;
  }
  public putBind(value: HpcCacheDirectoryLdapBind | undefined) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind
  }
}
export interface HpcCacheDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#search_domain HpcCache#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#servers HpcCache#servers}
  */
  readonly servers: string[];
}

function hpcCacheDnsToTerraform(struct?: HpcCacheDnsOutputReference | HpcCacheDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_domain: cdktf.stringToTerraform(struct!.searchDomain),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
  }
}

export class HpcCacheDnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // search_domain - computed: false, optional: true, required: false
  private _searchDomain?: string | undefined; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string | undefined) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers
  }
}
export interface HpcCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#create HpcCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#delete HpcCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#read HpcCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html#update HpcCache#update}
  */
  readonly update?: string;
}

function hpcCacheTimeoutsToTerraform(struct?: HpcCacheTimeoutsOutputReference | HpcCacheTimeouts): any {
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

export class HpcCacheTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html azurerm_hpc_cache}
*/
export class HpcCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hpc_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html azurerm_hpc_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheSizeInGb = config.cacheSizeInGb;
    this._location = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ntpServer = config.ntpServer;
    this._resourceGroupName = config.resourceGroupName;
    this._rootSquashEnabled = config.rootSquashEnabled;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._defaultAccessPolicy = config.defaultAccessPolicy;
    this._directoryActiveDirectory = config.directoryActiveDirectory;
    this._directoryFlatFile = config.directoryFlatFile;
    this._directoryLdap = config.directoryLdap;
    this._dns = config.dns;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size_in_gb - computed: false, optional: false, required: true
  private _cacheSizeInGb?: number; 
  public get cacheSizeInGb() {
    return this.getNumberAttribute('cache_size_in_gb');
  }
  public set cacheSizeInGb(value: number) {
    this._cacheSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInGbInput() {
    return this._cacheSizeInGb
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

  // mount_addresses - computed: true, optional: false, required: false
  public get mountAddresses() {
    return this.getListAttribute('mount_addresses');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number | undefined; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number | undefined) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
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

  // ntp_server - computed: false, optional: true, required: false
  private _ntpServer?: string | undefined; 
  public get ntpServer() {
    return this.getStringAttribute('ntp_server');
  }
  public set ntpServer(value: string | undefined) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer
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

  // root_squash_enabled - computed: true, optional: true, required: false
  private _rootSquashEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled') as any;
  }
  public set rootSquashEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // default_access_policy - computed: false, optional: true, required: false
  private _defaultAccessPolicy?: HpcCacheDefaultAccessPolicy | undefined; 
  private __defaultAccessPolicyOutput = new HpcCacheDefaultAccessPolicyOutputReference(this as any, "default_access_policy", true);
  public get defaultAccessPolicy() {
    return this.__defaultAccessPolicyOutput;
  }
  public putDefaultAccessPolicy(value: HpcCacheDefaultAccessPolicy | undefined) {
    this._defaultAccessPolicy = value;
  }
  public resetDefaultAccessPolicy() {
    this._defaultAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessPolicyInput() {
    return this._defaultAccessPolicy
  }

  // directory_active_directory - computed: false, optional: true, required: false
  private _directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory | undefined; 
  private __directoryActiveDirectoryOutput = new HpcCacheDirectoryActiveDirectoryOutputReference(this as any, "directory_active_directory", true);
  public get directoryActiveDirectory() {
    return this.__directoryActiveDirectoryOutput;
  }
  public putDirectoryActiveDirectory(value: HpcCacheDirectoryActiveDirectory | undefined) {
    this._directoryActiveDirectory = value;
  }
  public resetDirectoryActiveDirectory() {
    this._directoryActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryActiveDirectoryInput() {
    return this._directoryActiveDirectory
  }

  // directory_flat_file - computed: false, optional: true, required: false
  private _directoryFlatFile?: HpcCacheDirectoryFlatFile | undefined; 
  private __directoryFlatFileOutput = new HpcCacheDirectoryFlatFileOutputReference(this as any, "directory_flat_file", true);
  public get directoryFlatFile() {
    return this.__directoryFlatFileOutput;
  }
  public putDirectoryFlatFile(value: HpcCacheDirectoryFlatFile | undefined) {
    this._directoryFlatFile = value;
  }
  public resetDirectoryFlatFile() {
    this._directoryFlatFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryFlatFileInput() {
    return this._directoryFlatFile
  }

  // directory_ldap - computed: false, optional: true, required: false
  private _directoryLdap?: HpcCacheDirectoryLdap | undefined; 
  private __directoryLdapOutput = new HpcCacheDirectoryLdapOutputReference(this as any, "directory_ldap", true);
  public get directoryLdap() {
    return this.__directoryLdapOutput;
  }
  public putDirectoryLdap(value: HpcCacheDirectoryLdap | undefined) {
    this._directoryLdap = value;
  }
  public resetDirectoryLdap() {
    this._directoryLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryLdapInput() {
    return this._directoryLdap
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: HpcCacheDns | undefined; 
  private __dnsOutput = new HpcCacheDnsOutputReference(this as any, "dns", true);
  public get dns() {
    return this.__dnsOutput;
  }
  public putDns(value: HpcCacheDns | undefined) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheTimeouts | undefined; 
  private __timeoutsOutput = new HpcCacheTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: HpcCacheTimeouts | undefined) {
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
      cache_size_in_gb: cdktf.numberToTerraform(this._cacheSizeInGb),
      location: cdktf.stringToTerraform(this._location),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ntp_server: cdktf.stringToTerraform(this._ntpServer),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      root_squash_enabled: cdktf.booleanToTerraform(this._rootSquashEnabled),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      default_access_policy: hpcCacheDefaultAccessPolicyToTerraform(this._defaultAccessPolicy),
      directory_active_directory: hpcCacheDirectoryActiveDirectoryToTerraform(this._directoryActiveDirectory),
      directory_flat_file: hpcCacheDirectoryFlatFileToTerraform(this._directoryFlatFile),
      directory_ldap: hpcCacheDirectoryLdapToTerraform(this._directoryLdap),
      dns: hpcCacheDnsToTerraform(this._dns),
      timeouts: hpcCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
