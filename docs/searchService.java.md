# `searchService` Submodule <a name="`searchService` Submodule" id="@cdktf/provider-azurerm.searchService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchService <a name="SearchService" id="@cdktf/provider-azurerm.searchService.SearchService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service azurerm_search_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchService;

SearchService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .allowedIps(java.util.List<java.lang.String>)
//  .authenticationFailureMode(java.lang.String)
//  .customerManagedKeyEnforcementEnabled(java.lang.Boolean)
//  .customerManagedKeyEnforcementEnabled(IResolvable)
//  .hostingMode(java.lang.String)
//  .id(java.lang.String)
//  .identity(SearchServiceIdentity)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .networkRuleBypassOption(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .replicaCount(java.lang.Number)
//  .semanticSearchSku(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SearchServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#location SearchService#location}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#name SearchService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#sku SearchService#sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.allowedIps">allowedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.authenticationFailureMode">authenticationFailureMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.customerManagedKeyEnforcementEnabled">customerManagedKeyEnforcementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.hostingMode">hostingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#id SearchService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#network_rule_bypass_option SearchService#network_rule_bypass_option}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#partition_count SearchService#partition_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#replica_count SearchService#replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.semanticSearchSku">semanticSearchSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#tags SearchService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#location SearchService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#name SearchService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#sku SearchService#sku}.

---

##### `allowedIps`<sup>Optional</sup> <a name="allowedIps" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.allowedIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}.

---

##### `authenticationFailureMode`<sup>Optional</sup> <a name="authenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.authenticationFailureMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}.

---

##### `customerManagedKeyEnforcementEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.customerManagedKeyEnforcementEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}.

---

##### `hostingMode`<sup>Optional</sup> <a name="hostingMode" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.hostingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#id SearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#identity SearchService#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}.

---

##### `networkRuleBypassOption`<sup>Optional</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.networkRuleBypassOption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#network_rule_bypass_option SearchService#network_rule_bypass_option}.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.partitionCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#partition_count SearchService#partition_count}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#replica_count SearchService#replica_count}.

---

##### `semanticSearchSku`<sup>Optional</sup> <a name="semanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.semanticSearchSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#tags SearchService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#timeouts SearchService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetAllowedIps">resetAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetAuthenticationFailureMode">resetAuthenticationFailureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetCustomerManagedKeyEnforcementEnabled">resetCustomerManagedKeyEnforcementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetHostingMode">resetHostingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetNetworkRuleBypassOption">resetNetworkRuleBypassOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetSemanticSearchSku">resetSemanticSearchSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchService.SearchService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.searchService.SearchService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.searchService.SearchService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.searchService.SearchService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.searchService.SearchService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.searchService.SearchService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.searchService.SearchService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.searchService.SearchService.putIdentity"></a>

```java
public void putIdentity(SearchServiceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchService.SearchService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.searchService.SearchService.putTimeouts"></a>

```java
public void putTimeouts(SearchServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchService.SearchService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

---

##### `resetAllowedIps` <a name="resetAllowedIps" id="@cdktf/provider-azurerm.searchService.SearchService.resetAllowedIps"></a>

```java
public void resetAllowedIps()
```

##### `resetAuthenticationFailureMode` <a name="resetAuthenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchService.resetAuthenticationFailureMode"></a>

```java
public void resetAuthenticationFailureMode()
```

##### `resetCustomerManagedKeyEnforcementEnabled` <a name="resetCustomerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetCustomerManagedKeyEnforcementEnabled"></a>

```java
public void resetCustomerManagedKeyEnforcementEnabled()
```

##### `resetHostingMode` <a name="resetHostingMode" id="@cdktf/provider-azurerm.searchService.SearchService.resetHostingMode"></a>

```java
public void resetHostingMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.searchService.SearchService.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.searchService.SearchService.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetLocalAuthenticationEnabled"></a>

```java
public void resetLocalAuthenticationEnabled()
```

##### `resetNetworkRuleBypassOption` <a name="resetNetworkRuleBypassOption" id="@cdktf/provider-azurerm.searchService.SearchService.resetNetworkRuleBypassOption"></a>

```java
public void resetNetworkRuleBypassOption()
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-azurerm.searchService.SearchService.resetPartitionCount"></a>

```java
public void resetPartitionCount()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-azurerm.searchService.SearchService.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetSemanticSearchSku` <a name="resetSemanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchService.resetSemanticSearchSku"></a>

```java
public void resetSemanticSearchSku()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.searchService.SearchService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.searchService.SearchService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SearchService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.searchService.SearchService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchService;

SearchService.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchService.SearchService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchService;

SearchService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchService;

SearchService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchService;

SearchService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SearchService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SearchService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SearchService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SearchService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SearchService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEncryptionComplianceStatus">customerManagedKeyEncryptionComplianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference">SearchServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.queryKeys">queryKeys</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList">SearchServiceQueryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference">SearchServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.allowedIpsInput">allowedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureModeInput">authenticationFailureModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabledInput">customerManagedKeyEnforcementEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.hostingModeInput">hostingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.networkRuleBypassOptionInput">networkRuleBypassOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.partitionCountInput">partitionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSkuInput">semanticSearchSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.allowedIps">allowedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureMode">authenticationFailureMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabled">customerManagedKeyEnforcementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.hostingMode">hostingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSku">semanticSearchSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.searchService.SearchService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.searchService.SearchService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchService.SearchService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.searchService.SearchService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.searchService.SearchService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.searchService.SearchService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.searchService.SearchService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.searchService.SearchService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.searchService.SearchService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchService.SearchService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.searchService.SearchService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedKeyEncryptionComplianceStatus`<sup>Required</sup> <a name="customerManagedKeyEncryptionComplianceStatus" id="@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEncryptionComplianceStatus"></a>

```java
public java.lang.String getCustomerManagedKeyEncryptionComplianceStatus();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.searchService.SearchService.property.identity"></a>

```java
public SearchServiceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference">SearchServiceIdentityOutputReference</a>

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.searchService.SearchService.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `queryKeys`<sup>Required</sup> <a name="queryKeys" id="@cdktf/provider-azurerm.searchService.SearchService.property.queryKeys"></a>

```java
public SearchServiceQueryKeysList getQueryKeys();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList">SearchServiceQueryKeysList</a>

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.searchService.SearchService.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.searchService.SearchService.property.timeouts"></a>

```java
public SearchServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference">SearchServiceTimeoutsOutputReference</a>

---

##### `allowedIpsInput`<sup>Optional</sup> <a name="allowedIpsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.allowedIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationFailureModeInput`<sup>Optional</sup> <a name="authenticationFailureModeInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureModeInput"></a>

```java
public java.lang.String getAuthenticationFailureModeInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyEnforcementEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnforcementEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabledInput"></a>

```java
public java.lang.Object getCustomerManagedKeyEnforcementEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostingModeInput`<sup>Optional</sup> <a name="hostingModeInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.hostingModeInput"></a>

```java
public java.lang.String getHostingModeInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.identityInput"></a>

```java
public SearchServiceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabledInput"></a>

```java
public java.lang.Object getLocalAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkRuleBypassOptionInput`<sup>Optional</sup> <a name="networkRuleBypassOptionInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.networkRuleBypassOptionInput"></a>

```java
public java.lang.String getNetworkRuleBypassOptionInput();
```

- *Type:* java.lang.String

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.partitionCountInput"></a>

```java
public java.lang.Number getPartitionCountInput();
```

- *Type:* java.lang.Number

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `semanticSearchSkuInput`<sup>Optional</sup> <a name="semanticSearchSkuInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSkuInput"></a>

```java
public java.lang.String getSemanticSearchSkuInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

---

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@cdktf/provider-azurerm.searchService.SearchService.property.allowedIps"></a>

```java
public java.util.List<java.lang.String> getAllowedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationFailureMode`<sup>Required</sup> <a name="authenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureMode"></a>

```java
public java.lang.String getAuthenticationFailureMode();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyEnforcementEnabled`<sup>Required</sup> <a name="customerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnforcementEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostingMode`<sup>Required</sup> <a name="hostingMode" id="@cdktf/provider-azurerm.searchService.SearchService.property.hostingMode"></a>

```java
public java.lang.String getHostingMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.searchService.SearchService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchService.SearchService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkRuleBypassOption`<sup>Required</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.searchService.SearchService.property.networkRuleBypassOption"></a>

```java
public java.lang.String getNetworkRuleBypassOption();
```

- *Type:* java.lang.String

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-azurerm.searchService.SearchService.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-azurerm.searchService.SearchService.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `semanticSearchSku`<sup>Required</sup> <a name="semanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSku"></a>

```java
public java.lang.String getSemanticSearchSku();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.searchService.SearchService.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.searchService.SearchService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.searchService.SearchService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceConfig <a name="SearchServiceConfig" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceConfig;

SearchServiceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .allowedIps(java.util.List<java.lang.String>)
//  .authenticationFailureMode(java.lang.String)
//  .customerManagedKeyEnforcementEnabled(java.lang.Boolean)
//  .customerManagedKeyEnforcementEnabled(IResolvable)
//  .hostingMode(java.lang.String)
//  .id(java.lang.String)
//  .identity(SearchServiceIdentity)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .networkRuleBypassOption(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .replicaCount(java.lang.Number)
//  .semanticSearchSku(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SearchServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#location SearchService#location}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#name SearchService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#sku SearchService#sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.allowedIps">allowedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.authenticationFailureMode">authenticationFailureMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.customerManagedKeyEnforcementEnabled">customerManagedKeyEnforcementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.hostingMode">hostingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#id SearchService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#network_rule_bypass_option SearchService#network_rule_bypass_option}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#partition_count SearchService#partition_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#replica_count SearchService#replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.semanticSearchSku">semanticSearchSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#tags SearchService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#location SearchService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#name SearchService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#sku SearchService#sku}.

---

##### `allowedIps`<sup>Optional</sup> <a name="allowedIps" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.allowedIps"></a>

```java
public java.util.List<java.lang.String> getAllowedIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}.

---

##### `authenticationFailureMode`<sup>Optional</sup> <a name="authenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.authenticationFailureMode"></a>

```java
public java.lang.String getAuthenticationFailureMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}.

---

##### `customerManagedKeyEnforcementEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.customerManagedKeyEnforcementEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnforcementEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}.

---

##### `hostingMode`<sup>Optional</sup> <a name="hostingMode" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.hostingMode"></a>

```java
public java.lang.String getHostingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#id SearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.identity"></a>

```java
public SearchServiceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#identity SearchService#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}.

---

##### `networkRuleBypassOption`<sup>Optional</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.networkRuleBypassOption"></a>

```java
public java.lang.String getNetworkRuleBypassOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#network_rule_bypass_option SearchService#network_rule_bypass_option}.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#partition_count SearchService#partition_count}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#replica_count SearchService#replica_count}.

---

##### `semanticSearchSku`<sup>Optional</sup> <a name="semanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.semanticSearchSku"></a>

```java
public java.lang.String getSemanticSearchSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#tags SearchService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.timeouts"></a>

```java
public SearchServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#timeouts SearchService#timeouts}

---

### SearchServiceIdentity <a name="SearchServiceIdentity" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceIdentity;

SearchServiceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#type SearchService#type}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#identity_ids SearchService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#type SearchService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#identity_ids SearchService#identity_ids}.

---

### SearchServiceQueryKeys <a name="SearchServiceQueryKeys" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceQueryKeys;

SearchServiceQueryKeys.builder()
    .build();
```


### SearchServiceTimeouts <a name="SearchServiceTimeouts" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceTimeouts;

SearchServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#create SearchService#create}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#delete SearchService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#read SearchService#read}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#update SearchService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#create SearchService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#delete SearchService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#read SearchService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/search_service#update SearchService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceIdentityOutputReference <a name="SearchServiceIdentityOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceIdentityOutputReference;

new SearchServiceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.internalValue"></a>

```java
public SearchServiceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---


### SearchServiceQueryKeysList <a name="SearchServiceQueryKeysList" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceQueryKeysList;

new SearchServiceQueryKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get"></a>

```java
public SearchServiceQueryKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SearchServiceQueryKeysOutputReference <a name="SearchServiceQueryKeysOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceQueryKeysOutputReference;

new SearchServiceQueryKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys">SearchServiceQueryKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.internalValue"></a>

```java
public SearchServiceQueryKeys getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys">SearchServiceQueryKeys</a>

---


### SearchServiceTimeoutsOutputReference <a name="SearchServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.search_service.SearchServiceTimeoutsOutputReference;

new SearchServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

---



