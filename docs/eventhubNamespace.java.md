# `eventhubNamespace` Submodule <a name="`eventhubNamespace` Submodule" id="@cdktf/provider-azurerm.eventhubNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespace <a name="EventhubNamespace" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace azurerm_eventhub_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespace;

EventhubNamespace.Builder.create(Construct scope, java.lang.String id)
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
//  .autoInflateEnabled(java.lang.Boolean)
//  .autoInflateEnabled(IResolvable)
//  .capacity(java.lang.Number)
//  .dedicatedClusterId(java.lang.String)
//  .id(java.lang.String)
//  .identity(EventhubNamespaceIdentity)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .maximumThroughputUnits(java.lang.Number)
//  .minimumTlsVersion(java.lang.String)
//  .networkRulesets(IResolvable)
//  .networkRulesets(java.util.List<EventhubNamespaceNetworkRulesets>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EventhubNamespaceTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.autoInflateEnabled">autoInflateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.dedicatedClusterId">dedicatedClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.maximumThroughputUnits">maximumThroughputUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.networkRulesets">networkRulesets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#zone_redundant EventhubNamespace#zone_redundant}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}.

---

##### `autoInflateEnabled`<sup>Optional</sup> <a name="autoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.autoInflateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.capacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}.

---

##### `dedicatedClusterId`<sup>Optional</sup> <a name="dedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.dedicatedClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#identity EventhubNamespace#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}.

---

##### `maximumThroughputUnits`<sup>Optional</sup> <a name="maximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.maximumThroughputUnits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}.

---

##### `networkRulesets`<sup>Optional</sup> <a name="networkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.networkRulesets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#timeouts EventhubNamespace#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.zoneRedundant"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#zone_redundant EventhubNamespace#zone_redundant}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets">putNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled">resetAutoInflateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId">resetDedicatedClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits">resetMaximumThroughputUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets">resetNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity"></a>

```java
public void putIdentity(EventhubNamespaceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `putNetworkRulesets` <a name="putNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets"></a>

```java
public void putNetworkRulesets(IResolvable OR java.util.List<EventhubNamespaceNetworkRulesets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts"></a>

```java
public void putTimeouts(EventhubNamespaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `resetAutoInflateEnabled` <a name="resetAutoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled"></a>

```java
public void resetAutoInflateEnabled()
```

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity"></a>

```java
public void resetCapacity()
```

##### `resetDedicatedClusterId` <a name="resetDedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId"></a>

```java
public void resetDedicatedClusterId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled"></a>

```java
public void resetLocalAuthenticationEnabled()
```

##### `resetMaximumThroughputUnits` <a name="resetMaximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits"></a>

```java
public void resetMaximumThroughputUnits()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetNetworkRulesets` <a name="resetNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets"></a>

```java
public void resetNetworkRulesets()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetZoneRedundant"></a>

```java
public void resetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventhubNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespace;

EventhubNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespace;

EventhubNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespace;

EventhubNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespace;

EventhubNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventhubNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EventhubNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventhubNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventhubNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EventhubNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString">defaultPrimaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias">defaultPrimaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey">defaultPrimaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString">defaultSecondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias">defaultSecondaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey">defaultSecondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets">networkRulesets</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput">autoInflateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput">dedicatedClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput">maximumThroughputUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput">networkRulesetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled">autoInflateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId">dedicatedClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits">maximumThroughputUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultPrimaryConnectionString`<sup>Required</sup> <a name="defaultPrimaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString"></a>

```java
public java.lang.String getDefaultPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `defaultPrimaryConnectionStringAlias`<sup>Required</sup> <a name="defaultPrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias"></a>

```java
public java.lang.String getDefaultPrimaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `defaultPrimaryKey`<sup>Required</sup> <a name="defaultPrimaryKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey"></a>

```java
public java.lang.String getDefaultPrimaryKey();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryConnectionString`<sup>Required</sup> <a name="defaultSecondaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString"></a>

```java
public java.lang.String getDefaultSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryConnectionStringAlias`<sup>Required</sup> <a name="defaultSecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias"></a>

```java
public java.lang.String getDefaultSecondaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryKey`<sup>Required</sup> <a name="defaultSecondaryKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey"></a>

```java
public java.lang.String getDefaultSecondaryKey();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity"></a>

```java
public EventhubNamespaceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a>

---

##### `networkRulesets`<sup>Required</sup> <a name="networkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets"></a>

```java
public EventhubNamespaceNetworkRulesetsList getNetworkRulesets();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts"></a>

```java
public EventhubNamespaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a>

---

##### `autoInflateEnabledInput`<sup>Optional</sup> <a name="autoInflateEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput"></a>

```java
public java.lang.Object getAutoInflateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `dedicatedClusterIdInput`<sup>Optional</sup> <a name="dedicatedClusterIdInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput"></a>

```java
public java.lang.String getDedicatedClusterIdInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput"></a>

```java
public EventhubNamespaceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput"></a>

```java
public java.lang.Object getLocalAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maximumThroughputUnitsInput`<sup>Optional</sup> <a name="maximumThroughputUnitsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput"></a>

```java
public java.lang.Number getMaximumThroughputUnitsInput();
```

- *Type:* java.lang.Number

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkRulesetsInput`<sup>Optional</sup> <a name="networkRulesetsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput"></a>

```java
public java.lang.Object getNetworkRulesetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.zoneRedundantInput"></a>

```java
public java.lang.Object getZoneRedundantInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoInflateEnabled`<sup>Required</sup> <a name="autoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled"></a>

```java
public java.lang.Object getAutoInflateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `dedicatedClusterId`<sup>Required</sup> <a name="dedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId"></a>

```java
public java.lang.String getDedicatedClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maximumThroughputUnits`<sup>Required</sup> <a name="maximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits"></a>

```java
public java.lang.Number getMaximumThroughputUnits();
```

- *Type:* java.lang.Number

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceConfig <a name="EventhubNamespaceConfig" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceConfig;

EventhubNamespaceConfig.builder()
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
//  .autoInflateEnabled(java.lang.Boolean)
//  .autoInflateEnabled(IResolvable)
//  .capacity(java.lang.Number)
//  .dedicatedClusterId(java.lang.String)
//  .id(java.lang.String)
//  .identity(EventhubNamespaceIdentity)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .maximumThroughputUnits(java.lang.Number)
//  .minimumTlsVersion(java.lang.String)
//  .networkRulesets(IResolvable)
//  .networkRulesets(java.util.List<EventhubNamespaceNetworkRulesets>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EventhubNamespaceTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled">autoInflateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId">dedicatedClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits">maximumThroughputUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets">networkRulesets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#zone_redundant EventhubNamespace#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}.

---

##### `autoInflateEnabled`<sup>Optional</sup> <a name="autoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled"></a>

```java
public java.lang.Object getAutoInflateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}.

---

##### `dedicatedClusterId`<sup>Optional</sup> <a name="dedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId"></a>

```java
public java.lang.String getDedicatedClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity"></a>

```java
public EventhubNamespaceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#identity EventhubNamespace#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}.

---

##### `maximumThroughputUnits`<sup>Optional</sup> <a name="maximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits"></a>

```java
public java.lang.Number getMaximumThroughputUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}.

---

##### `networkRulesets`<sup>Optional</sup> <a name="networkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets"></a>

```java
public java.lang.Object getNetworkRulesets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts"></a>

```java
public EventhubNamespaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#timeouts EventhubNamespace#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#zone_redundant EventhubNamespace#zone_redundant}.

---

### EventhubNamespaceIdentity <a name="EventhubNamespaceIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceIdentity;

EventhubNamespaceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}.

---

### EventhubNamespaceNetworkRulesets <a name="EventhubNamespaceNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesets;

EventhubNamespaceNetworkRulesets.builder()
//  .defaultAction(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<EventhubNamespaceNetworkRulesetsIpRule>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .trustedServiceAccessEnabled(java.lang.Boolean)
//  .trustedServiceAccessEnabled(IResolvable)
//  .virtualNetworkRule(IResolvable)
//  .virtualNetworkRule(java.util.List<EventhubNamespaceNetworkRulesetsVirtualNetworkRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled">trustedServiceAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `trustedServiceAccessEnabled`<sup>Optional</sup> <a name="trustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled"></a>

```java
public java.lang.Object getTrustedServiceAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}.

---

##### `virtualNetworkRule`<sup>Optional</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule"></a>

```java
public java.lang.Object getVirtualNetworkRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}.

---

### EventhubNamespaceNetworkRulesetsIpRule <a name="EventhubNamespaceNetworkRulesetsIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsIpRule;

EventhubNamespaceNetworkRulesetsIpRule.builder()
//  .action(java.lang.String)
//  .ipMask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask">ipMask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}.

---

##### `ipMask`<sup>Optional</sup> <a name="ipMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask"></a>

```java
public java.lang.String getIpMask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}.

---

### EventhubNamespaceNetworkRulesetsVirtualNetworkRule <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule;

EventhubNamespaceNetworkRulesetsVirtualNetworkRule.builder()
//  .ignoreMissingVirtualNetworkServiceEndpoint(java.lang.Boolean)
//  .ignoreMissingVirtualNetworkServiceEndpoint(IResolvable)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint">ignoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}. |

---

##### `ignoreMissingVirtualNetworkServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVirtualNetworkServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}.

---

### EventhubNamespaceTimeouts <a name="EventhubNamespaceTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceTimeouts;

EventhubNamespaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceIdentityOutputReference <a name="EventhubNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceIdentityOutputReference;

new EventhubNamespaceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue"></a>

```java
public EventhubNamespaceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---


### EventhubNamespaceNetworkRulesetsIpRuleList <a name="EventhubNamespaceNetworkRulesetsIpRuleList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsIpRuleList;

new EventhubNamespaceNetworkRulesetsIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get"></a>

```java
public EventhubNamespaceNetworkRulesetsIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>>

---


### EventhubNamespaceNetworkRulesetsIpRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsIpRuleOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference;

new EventhubNamespaceNetworkRulesetsIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask">resetIpMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetIpMask` <a name="resetIpMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask"></a>

```java
public void resetIpMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput">ipMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask">ipMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `ipMaskInput`<sup>Optional</sup> <a name="ipMaskInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput"></a>

```java
public java.lang.String getIpMaskInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipMask`<sup>Required</sup> <a name="ipMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask"></a>

```java
public java.lang.String getIpMask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>

---


### EventhubNamespaceNetworkRulesetsList <a name="EventhubNamespaceNetworkRulesetsList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsList;

new EventhubNamespaceNetworkRulesetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get"></a>

```java
public EventhubNamespaceNetworkRulesetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>>

---


### EventhubNamespaceNetworkRulesetsOutputReference <a name="EventhubNamespaceNetworkRulesetsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsOutputReference;

new EventhubNamespaceNetworkRulesetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule">putVirtualNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled">resetTrustedServiceAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule">resetVirtualNetworkRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<EventhubNamespaceNetworkRulesetsIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>>

---

##### `putVirtualNetworkRule` <a name="putVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule"></a>

```java
public void putVirtualNetworkRule(IResolvable OR java.util.List<EventhubNamespaceNetworkRulesetsVirtualNetworkRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule"></a>

```java
public void resetIpRule()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetTrustedServiceAccessEnabled` <a name="resetTrustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled"></a>

```java
public void resetTrustedServiceAccessEnabled()
```

##### `resetVirtualNetworkRule` <a name="resetVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule"></a>

```java
public void resetVirtualNetworkRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput">trustedServiceAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput">virtualNetworkRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled">trustedServiceAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule"></a>

```java
public EventhubNamespaceNetworkRulesetsIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a>

---

##### `virtualNetworkRule`<sup>Required</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule"></a>

```java
public EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList getVirtualNetworkRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trustedServiceAccessEnabledInput`<sup>Optional</sup> <a name="trustedServiceAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput"></a>

```java
public java.lang.Object getTrustedServiceAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkRuleInput`<sup>Optional</sup> <a name="virtualNetworkRuleInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput"></a>

```java
public java.lang.Object getVirtualNetworkRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trustedServiceAccessEnabled`<sup>Required</sup> <a name="trustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled"></a>

```java
public java.lang.Object getTrustedServiceAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList;

new EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get"></a>

```java
public EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>>

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference;

new EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint">resetIgnoreMissingVirtualNetworkServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVirtualNetworkServiceEndpoint` <a name="resetIgnoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint"></a>

```java
public void resetIgnoreMissingVirtualNetworkServiceEndpoint()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput">ignoreMissingVirtualNetworkServiceEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint">ignoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVirtualNetworkServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVirtualNetworkServiceEndpointInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput"></a>

```java
public java.lang.Object getIgnoreMissingVirtualNetworkServiceEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVirtualNetworkServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVirtualNetworkServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>

---


### EventhubNamespaceTimeoutsOutputReference <a name="EventhubNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace.EventhubNamespaceTimeoutsOutputReference;

new EventhubNamespaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---



