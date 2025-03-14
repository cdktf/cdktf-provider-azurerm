# `monitorDataCollectionRule` Submodule <a name="`monitorDataCollectionRule` Submodule" id="@cdktf/provider-azurerm.monitorDataCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDataCollectionRule <a name="MonitorDataCollectionRule" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule azurerm_monitor_data_collection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRule;

MonitorDataCollectionRule.Builder.create(Construct scope, java.lang.String id)
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
    .dataFlow(IResolvable)
    .dataFlow(java.util.List<MonitorDataCollectionRuleDataFlow>)
    .destinations(MonitorDataCollectionRuleDestinations)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dataCollectionEndpointId(java.lang.String)
//  .dataSources(MonitorDataCollectionRuleDataSources)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identity(MonitorDataCollectionRuleIdentity)
//  .kind(java.lang.String)
//  .streamDeclaration(IResolvable)
//  .streamDeclaration(java.util.List<MonitorDataCollectionRuleStreamDeclaration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorDataCollectionRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataFlow">dataFlow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>></code> | data_flow block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | data_sources block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.streamDeclaration">streamDeclaration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>></code> | stream_declaration block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataFlow"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_flow MonitorDataCollectionRule#data_flow}

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.destinations"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}.

---

##### `dataCollectionEndpointId`<sup>Optional</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataCollectionEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.dataSources"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_sources MonitorDataCollectionRule#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#identity MonitorDataCollectionRule#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}.

---

##### `streamDeclaration`<sup>Optional</sup> <a name="streamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.streamDeclaration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>>

stream_declaration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream_declaration MonitorDataCollectionRule#stream_declaration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#timeouts MonitorDataCollectionRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow">putDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration">putStreamDeclaration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataCollectionEndpointId">resetDataCollectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetStreamDeclaration">resetStreamDeclaration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataFlow` <a name="putDataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow"></a>

```java
public void putDataFlow(IResolvable OR java.util.List<MonitorDataCollectionRuleDataFlow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>>

---

##### `putDataSources` <a name="putDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources"></a>

```java
public void putDataSources(MonitorDataCollectionRuleDataSources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations"></a>

```java
public void putDestinations(MonitorDataCollectionRuleDestinations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity"></a>

```java
public void putIdentity(MonitorDataCollectionRuleIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---

##### `putStreamDeclaration` <a name="putStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration"></a>

```java
public void putStreamDeclaration(IResolvable OR java.util.List<MonitorDataCollectionRuleStreamDeclaration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts"></a>

```java
public void putTimeouts(MonitorDataCollectionRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---

##### `resetDataCollectionEndpointId` <a name="resetDataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataCollectionEndpointId"></a>

```java
public void resetDataCollectionEndpointId()
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetKind"></a>

```java
public void resetKind()
```

##### `resetStreamDeclaration` <a name="resetStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetStreamDeclaration"></a>

```java
public void resetStreamDeclaration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDataCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRule;

MonitorDataCollectionRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRule;

MonitorDataCollectionRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRule;

MonitorDataCollectionRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRule;

MonitorDataCollectionRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorDataCollectionRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorDataCollectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorDataCollectionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorDataCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDataCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList">MonitorDataCollectionRuleDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference">MonitorDataCollectionRuleDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference">MonitorDataCollectionRuleDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference">MonitorDataCollectionRuleIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.immutableId">immutableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclaration">streamDeclaration</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList">MonitorDataCollectionRuleStreamDeclarationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference">MonitorDataCollectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointIdInput">dataCollectionEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlowInput">dataFlowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSourcesInput">dataSourcesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinationsInput">destinationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclarationInput">streamDeclarationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlow"></a>

```java
public MonitorDataCollectionRuleDataFlowList getDataFlow();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList">MonitorDataCollectionRuleDataFlowList</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSources"></a>

```java
public MonitorDataCollectionRuleDataSourcesOutputReference getDataSources();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference">MonitorDataCollectionRuleDataSourcesOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinations"></a>

```java
public MonitorDataCollectionRuleDestinationsOutputReference getDestinations();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference">MonitorDataCollectionRuleDestinationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identity"></a>

```java
public MonitorDataCollectionRuleIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference">MonitorDataCollectionRuleIdentityOutputReference</a>

---

##### `immutableId`<sup>Required</sup> <a name="immutableId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.immutableId"></a>

```java
public java.lang.String getImmutableId();
```

- *Type:* java.lang.String

---

##### `streamDeclaration`<sup>Required</sup> <a name="streamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclaration"></a>

```java
public MonitorDataCollectionRuleStreamDeclarationList getStreamDeclaration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList">MonitorDataCollectionRuleStreamDeclarationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeouts"></a>

```java
public MonitorDataCollectionRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference">MonitorDataCollectionRuleTimeoutsOutputReference</a>

---

##### `dataCollectionEndpointIdInput`<sup>Optional</sup> <a name="dataCollectionEndpointIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointIdInput"></a>

```java
public java.lang.String getDataCollectionEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `dataFlowInput`<sup>Optional</sup> <a name="dataFlowInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlowInput"></a>

```java
public java.lang.Object getDataFlowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSourcesInput"></a>

```java
public MonitorDataCollectionRuleDataSources getDataSourcesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinationsInput"></a>

```java
public MonitorDataCollectionRuleDestinations getDestinationsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identityInput"></a>

```java
public MonitorDataCollectionRuleIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `streamDeclarationInput`<sup>Optional</sup> <a name="streamDeclarationInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclarationInput"></a>

```java
public java.lang.Object getStreamDeclarationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---

##### `dataCollectionEndpointId`<sup>Required</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointId"></a>

```java
public java.lang.String getDataCollectionEndpointId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDataCollectionRuleConfig <a name="MonitorDataCollectionRuleConfig" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleConfig;

MonitorDataCollectionRuleConfig.builder()
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
    .dataFlow(IResolvable)
    .dataFlow(java.util.List<MonitorDataCollectionRuleDataFlow>)
    .destinations(MonitorDataCollectionRuleDestinations)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dataCollectionEndpointId(java.lang.String)
//  .dataSources(MonitorDataCollectionRuleDataSources)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identity(MonitorDataCollectionRuleIdentity)
//  .kind(java.lang.String)
//  .streamDeclaration(IResolvable)
//  .streamDeclaration(java.util.List<MonitorDataCollectionRuleStreamDeclaration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorDataCollectionRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataFlow">dataFlow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>></code> | data_flow block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | data_sources block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.streamDeclaration">streamDeclaration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>></code> | stream_declaration block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataFlow"></a>

```java
public java.lang.Object getDataFlow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_flow MonitorDataCollectionRule#data_flow}

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.destinations"></a>

```java
public MonitorDataCollectionRuleDestinations getDestinations();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}.

---

##### `dataCollectionEndpointId`<sup>Optional</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataCollectionEndpointId"></a>

```java
public java.lang.String getDataCollectionEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataSources"></a>

```java
public MonitorDataCollectionRuleDataSources getDataSources();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_sources MonitorDataCollectionRule#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.identity"></a>

```java
public MonitorDataCollectionRuleIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#identity MonitorDataCollectionRule#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}.

---

##### `streamDeclaration`<sup>Optional</sup> <a name="streamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.streamDeclaration"></a>

```java
public java.lang.Object getStreamDeclaration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>>

stream_declaration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream_declaration MonitorDataCollectionRule#stream_declaration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.timeouts"></a>

```java
public MonitorDataCollectionRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#timeouts MonitorDataCollectionRule#timeouts}

---

### MonitorDataCollectionRuleDataFlow <a name="MonitorDataCollectionRuleDataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataFlow;

MonitorDataCollectionRuleDataFlow.builder()
    .destinations(java.util.List<java.lang.String>)
    .streams(java.util.List<java.lang.String>)
//  .builtInTransform(java.lang.String)
//  .outputStream(java.lang.String)
//  .transformKql(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.builtInTransform">builtInTransform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#built_in_transform MonitorDataCollectionRule#built_in_transform}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.outputStream">outputStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#output_stream MonitorDataCollectionRule#output_stream}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.transformKql">transformKql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#transform_kql MonitorDataCollectionRule#transform_kql}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `builtInTransform`<sup>Optional</sup> <a name="builtInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.builtInTransform"></a>

```java
public java.lang.String getBuiltInTransform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#built_in_transform MonitorDataCollectionRule#built_in_transform}.

---

##### `outputStream`<sup>Optional</sup> <a name="outputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.outputStream"></a>

```java
public java.lang.String getOutputStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#output_stream MonitorDataCollectionRule#output_stream}.

---

##### `transformKql`<sup>Optional</sup> <a name="transformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.transformKql"></a>

```java
public java.lang.String getTransformKql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#transform_kql MonitorDataCollectionRule#transform_kql}.

---

### MonitorDataCollectionRuleDataSources <a name="MonitorDataCollectionRuleDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSources;

MonitorDataCollectionRuleDataSources.builder()
//  .dataImport(MonitorDataCollectionRuleDataSourcesDataImport)
//  .extension(IResolvable)
//  .extension(java.util.List<MonitorDataCollectionRuleDataSourcesExtension>)
//  .iisLog(IResolvable)
//  .iisLog(java.util.List<MonitorDataCollectionRuleDataSourcesIisLog>)
//  .logFile(IResolvable)
//  .logFile(java.util.List<MonitorDataCollectionRuleDataSourcesLogFile>)
//  .performanceCounter(IResolvable)
//  .performanceCounter(java.util.List<MonitorDataCollectionRuleDataSourcesPerformanceCounter>)
//  .platformTelemetry(IResolvable)
//  .platformTelemetry(java.util.List<MonitorDataCollectionRuleDataSourcesPlatformTelemetry>)
//  .prometheusForwarder(IResolvable)
//  .prometheusForwarder(java.util.List<MonitorDataCollectionRuleDataSourcesPrometheusForwarder>)
//  .syslog(IResolvable)
//  .syslog(java.util.List<MonitorDataCollectionRuleDataSourcesSyslog>)
//  .windowsEventLog(IResolvable)
//  .windowsEventLog(java.util.List<MonitorDataCollectionRuleDataSourcesWindowsEventLog>)
//  .windowsFirewallLog(IResolvable)
//  .windowsFirewallLog(java.util.List<MonitorDataCollectionRuleDataSourcesWindowsFirewallLog>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.dataImport">dataImport</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | data_import block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.extension">extension</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.iisLog">iisLog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>></code> | iis_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.logFile">logFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>></code> | log_file block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.performanceCounter">performanceCounter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>></code> | performance_counter block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.platformTelemetry">platformTelemetry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>></code> | platform_telemetry block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.prometheusForwarder">prometheusForwarder</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>></code> | prometheus_forwarder block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.syslog">syslog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>></code> | syslog block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsEventLog">windowsEventLog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>></code> | windows_event_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsFirewallLog">windowsFirewallLog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>></code> | windows_firewall_log block. |

---

##### `dataImport`<sup>Optional</sup> <a name="dataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.dataImport"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImport getDataImport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

data_import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#data_import MonitorDataCollectionRule#data_import}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.extension"></a>

```java
public java.lang.Object getExtension();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#extension MonitorDataCollectionRule#extension}

---

##### `iisLog`<sup>Optional</sup> <a name="iisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.iisLog"></a>

```java
public java.lang.Object getIisLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>>

iis_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#iis_log MonitorDataCollectionRule#iis_log}

---

##### `logFile`<sup>Optional</sup> <a name="logFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.logFile"></a>

```java
public java.lang.Object getLogFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>>

log_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_file MonitorDataCollectionRule#log_file}

---

##### `performanceCounter`<sup>Optional</sup> <a name="performanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.performanceCounter"></a>

```java
public java.lang.Object getPerformanceCounter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>>

performance_counter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#performance_counter MonitorDataCollectionRule#performance_counter}

---

##### `platformTelemetry`<sup>Optional</sup> <a name="platformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.platformTelemetry"></a>

```java
public java.lang.Object getPlatformTelemetry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>>

platform_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#platform_telemetry MonitorDataCollectionRule#platform_telemetry}

---

##### `prometheusForwarder`<sup>Optional</sup> <a name="prometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.prometheusForwarder"></a>

```java
public java.lang.Object getPrometheusForwarder();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>>

prometheus_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#prometheus_forwarder MonitorDataCollectionRule#prometheus_forwarder}

---

##### `syslog`<sup>Optional</sup> <a name="syslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.syslog"></a>

```java
public java.lang.Object getSyslog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>>

syslog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#syslog MonitorDataCollectionRule#syslog}

---

##### `windowsEventLog`<sup>Optional</sup> <a name="windowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsEventLog"></a>

```java
public java.lang.Object getWindowsEventLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>>

windows_event_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#windows_event_log MonitorDataCollectionRule#windows_event_log}

---

##### `windowsFirewallLog`<sup>Optional</sup> <a name="windowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsFirewallLog"></a>

```java
public java.lang.Object getWindowsFirewallLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>>

windows_firewall_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#windows_firewall_log MonitorDataCollectionRule#windows_firewall_log}

---

### MonitorDataCollectionRuleDataSourcesDataImport <a name="MonitorDataCollectionRuleDataSourcesDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesDataImport;

MonitorDataCollectionRuleDataSourcesDataImport.builder()
    .eventHubDataSource(IResolvable)
    .eventHubDataSource(java.util.List<MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.property.eventHubDataSource">eventHubDataSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>></code> | event_hub_data_source block. |

---

##### `eventHubDataSource`<sup>Required</sup> <a name="eventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.property.eventHubDataSource"></a>

```java
public java.lang.Object getEventHubDataSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>>

event_hub_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_data_source MonitorDataCollectionRule#event_hub_data_source}

---

### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource;

MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.builder()
    .name(java.lang.String)
    .stream(java.lang.String)
//  .consumerGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.stream">stream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream MonitorDataCollectionRule#stream}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#consumer_group MonitorDataCollectionRule#consumer_group}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.stream"></a>

```java
public java.lang.String getStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream MonitorDataCollectionRule#stream}.

---

##### `consumerGroup`<sup>Optional</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#consumer_group MonitorDataCollectionRule#consumer_group}.

---

### MonitorDataCollectionRuleDataSourcesExtension <a name="MonitorDataCollectionRuleDataSourcesExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesExtension;

MonitorDataCollectionRuleDataSourcesExtension.builder()
    .extensionName(java.lang.String)
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
//  .extensionJson(java.lang.String)
//  .inputDataSources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionName">extensionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionJson">extensionJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.inputDataSources">inputDataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}. |

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionName"></a>

```java
public java.lang.String getExtensionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `extensionJson`<sup>Optional</sup> <a name="extensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionJson"></a>

```java
public java.lang.String getExtensionJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}.

---

##### `inputDataSources`<sup>Optional</sup> <a name="inputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.inputDataSources"></a>

```java
public java.util.List<java.lang.String> getInputDataSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}.

---

### MonitorDataCollectionRuleDataSourcesIisLog <a name="MonitorDataCollectionRuleDataSourcesIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesIisLog;

MonitorDataCollectionRuleDataSourcesIisLog.builder()
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
//  .logDirectories(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.logDirectories">logDirectories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_directories MonitorDataCollectionRule#log_directories}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `logDirectories`<sup>Optional</sup> <a name="logDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.logDirectories"></a>

```java
public java.util.List<java.lang.String> getLogDirectories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_directories MonitorDataCollectionRule#log_directories}.

---

### MonitorDataCollectionRuleDataSourcesLogFile <a name="MonitorDataCollectionRuleDataSourcesLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFile;

MonitorDataCollectionRuleDataSourcesLogFile.builder()
    .filePatterns(java.util.List<java.lang.String>)
    .format(java.lang.String)
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
//  .settings(MonitorDataCollectionRuleDataSourcesLogFileSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.filePatterns">filePatterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#file_patterns MonitorDataCollectionRule#file_patterns}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#format MonitorDataCollectionRule#format}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | settings block. |

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.filePatterns"></a>

```java
public java.util.List<java.lang.String> getFilePatterns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#file_patterns MonitorDataCollectionRule#file_patterns}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#format MonitorDataCollectionRule#format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.settings"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#settings MonitorDataCollectionRule#settings}

---

### MonitorDataCollectionRuleDataSourcesLogFileSettings <a name="MonitorDataCollectionRuleDataSourcesLogFileSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileSettings;

MonitorDataCollectionRuleDataSourcesLogFileSettings.builder()
    .text(MonitorDataCollectionRuleDataSourcesLogFileSettingsText)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.property.text">text</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | text block. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.property.text"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettingsText getText();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#text MonitorDataCollectionRule#text}

---

### MonitorDataCollectionRuleDataSourcesLogFileSettingsText <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsText" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText;

MonitorDataCollectionRuleDataSourcesLogFileSettingsText.builder()
    .recordStartTimestampFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.property.recordStartTimestampFormat">recordStartTimestampFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#record_start_timestamp_format MonitorDataCollectionRule#record_start_timestamp_format}. |

---

##### `recordStartTimestampFormat`<sup>Required</sup> <a name="recordStartTimestampFormat" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.property.recordStartTimestampFormat"></a>

```java
public java.lang.String getRecordStartTimestampFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#record_start_timestamp_format MonitorDataCollectionRule#record_start_timestamp_format}.

---

### MonitorDataCollectionRuleDataSourcesPerformanceCounter <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPerformanceCounter;

MonitorDataCollectionRuleDataSourcesPerformanceCounter.builder()
    .counterSpecifiers(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .samplingFrequencyInSeconds(java.lang.Number)
    .streams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.counterSpecifiers">counterSpecifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.samplingFrequencyInSeconds">samplingFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `counterSpecifiers`<sup>Required</sup> <a name="counterSpecifiers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.counterSpecifiers"></a>

```java
public java.util.List<java.lang.String> getCounterSpecifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `samplingFrequencyInSeconds`<sup>Required</sup> <a name="samplingFrequencyInSeconds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.samplingFrequencyInSeconds"></a>

```java
public java.lang.Number getSamplingFrequencyInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesPlatformTelemetry <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry;

MonitorDataCollectionRuleDataSourcesPlatformTelemetry.builder()
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesPrometheusForwarder <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder;

MonitorDataCollectionRuleDataSourcesPrometheusForwarder.builder()
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
//  .labelIncludeFilter(IResolvable)
//  .labelIncludeFilter(java.util.List<MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.labelIncludeFilter">labelIncludeFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>></code> | label_include_filter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `labelIncludeFilter`<sup>Optional</sup> <a name="labelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.labelIncludeFilter"></a>

```java
public java.lang.Object getLabelIncludeFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>>

label_include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#label_include_filter MonitorDataCollectionRule#label_include_filter}

---

### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter;

MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#label MonitorDataCollectionRule#label}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#value MonitorDataCollectionRule#value}. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#label MonitorDataCollectionRule#label}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#value MonitorDataCollectionRule#value}.

---

### MonitorDataCollectionRuleDataSourcesSyslog <a name="MonitorDataCollectionRuleDataSourcesSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesSyslog;

MonitorDataCollectionRuleDataSourcesSyslog.builder()
    .facilityNames(java.util.List<java.lang.String>)
    .logLevels(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.facilityNames">facilityNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.logLevels">logLevels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `facilityNames`<sup>Required</sup> <a name="facilityNames" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.facilityNames"></a>

```java
public java.util.List<java.lang.String> getFacilityNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}.

---

##### `logLevels`<sup>Required</sup> <a name="logLevels" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.logLevels"></a>

```java
public java.util.List<java.lang.String> getLogLevels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesWindowsEventLog <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsEventLog;

MonitorDataCollectionRuleDataSourcesWindowsEventLog.builder()
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
    .xPathQueries(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.xPathQueries">xPathQueries</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `xPathQueries`<sup>Required</sup> <a name="xPathQueries" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.xPathQueries"></a>

```java
public java.util.List<java.lang.String> getXPathQueries();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}.

---

### MonitorDataCollectionRuleDataSourcesWindowsFirewallLog <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog;

MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.builder()
    .name(java.lang.String)
    .streams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDestinations <a name="MonitorDataCollectionRuleDestinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinations;

MonitorDataCollectionRuleDestinations.builder()
//  .azureMonitorMetrics(MonitorDataCollectionRuleDestinationsAzureMonitorMetrics)
//  .eventHub(MonitorDataCollectionRuleDestinationsEventHub)
//  .eventHubDirect(MonitorDataCollectionRuleDestinationsEventHubDirect)
//  .logAnalytics(IResolvable)
//  .logAnalytics(java.util.List<MonitorDataCollectionRuleDestinationsLogAnalytics>)
//  .monitorAccount(IResolvable)
//  .monitorAccount(java.util.List<MonitorDataCollectionRuleDestinationsMonitorAccount>)
//  .storageBlob(IResolvable)
//  .storageBlob(java.util.List<MonitorDataCollectionRuleDestinationsStorageBlob>)
//  .storageBlobDirect(IResolvable)
//  .storageBlobDirect(java.util.List<MonitorDataCollectionRuleDestinationsStorageBlobDirect>)
//  .storageTableDirect(IResolvable)
//  .storageTableDirect(java.util.List<MonitorDataCollectionRuleDestinationsStorageTableDirect>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.azureMonitorMetrics">azureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | azure_monitor_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHubDirect">eventHubDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | event_hub_direct block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.logAnalytics">logAnalytics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>></code> | log_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.monitorAccount">monitorAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>></code> | monitor_account block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlob">storageBlob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>></code> | storage_blob block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlobDirect">storageBlobDirect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>></code> | storage_blob_direct block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageTableDirect">storageTableDirect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>></code> | storage_table_direct block. |

---

##### `azureMonitorMetrics`<sup>Optional</sup> <a name="azureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.azureMonitorMetrics"></a>

```java
public MonitorDataCollectionRuleDestinationsAzureMonitorMetrics getAzureMonitorMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

azure_monitor_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#azure_monitor_metrics MonitorDataCollectionRule#azure_monitor_metrics}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHub"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHub getEventHub();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub MonitorDataCollectionRule#event_hub}

---

##### `eventHubDirect`<sup>Optional</sup> <a name="eventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHubDirect"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHubDirect getEventHubDirect();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

event_hub_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_direct MonitorDataCollectionRule#event_hub_direct}

---

##### `logAnalytics`<sup>Optional</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.logAnalytics"></a>

```java
public java.lang.Object getLogAnalytics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#log_analytics MonitorDataCollectionRule#log_analytics}

---

##### `monitorAccount`<sup>Optional</sup> <a name="monitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.monitorAccount"></a>

```java
public java.lang.Object getMonitorAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>>

monitor_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#monitor_account MonitorDataCollectionRule#monitor_account}

---

##### `storageBlob`<sup>Optional</sup> <a name="storageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlob"></a>

```java
public java.lang.Object getStorageBlob();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>>

storage_blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_blob MonitorDataCollectionRule#storage_blob}

---

##### `storageBlobDirect`<sup>Optional</sup> <a name="storageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlobDirect"></a>

```java
public java.lang.Object getStorageBlobDirect();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>>

storage_blob_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_blob_direct MonitorDataCollectionRule#storage_blob_direct}

---

##### `storageTableDirect`<sup>Optional</sup> <a name="storageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageTableDirect"></a>

```java
public java.lang.Object getStorageTableDirect();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>>

storage_table_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_table_direct MonitorDataCollectionRule#storage_table_direct}

---

### MonitorDataCollectionRuleDestinationsAzureMonitorMetrics <a name="MonitorDataCollectionRuleDestinationsAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;

MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsEventHub <a name="MonitorDataCollectionRuleDestinationsEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsEventHub;

MonitorDataCollectionRuleDestinationsEventHub.builder()
    .eventHubId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.eventHubId">eventHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.eventHubId"></a>

```java
public java.lang.String getEventHubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsEventHubDirect <a name="MonitorDataCollectionRuleDestinationsEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsEventHubDirect;

MonitorDataCollectionRuleDestinationsEventHubDirect.builder()
    .eventHubId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.eventHubId">eventHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.eventHubId"></a>

```java
public java.lang.String getEventHubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsLogAnalytics <a name="MonitorDataCollectionRuleDestinationsLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsLogAnalytics;

MonitorDataCollectionRuleDestinationsLogAnalytics.builder()
    .name(java.lang.String)
    .workspaceResourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.workspaceResourceId">workspaceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.workspaceResourceId"></a>

```java
public java.lang.String getWorkspaceResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}.

---

### MonitorDataCollectionRuleDestinationsMonitorAccount <a name="MonitorDataCollectionRuleDestinationsMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsMonitorAccount;

MonitorDataCollectionRuleDestinationsMonitorAccount.builder()
    .monitorAccountId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.monitorAccountId">monitorAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#monitor_account_id MonitorDataCollectionRule#monitor_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `monitorAccountId`<sup>Required</sup> <a name="monitorAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.monitorAccountId"></a>

```java
public java.lang.String getMonitorAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#monitor_account_id MonitorDataCollectionRule#monitor_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsStorageBlob <a name="MonitorDataCollectionRuleDestinationsStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlob;

MonitorDataCollectionRuleDestinationsStorageBlob.builder()
    .containerName(java.lang.String)
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

### MonitorDataCollectionRuleDestinationsStorageBlobDirect <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlobDirect;

MonitorDataCollectionRuleDestinationsStorageBlobDirect.builder()
    .containerName(java.lang.String)
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

### MonitorDataCollectionRuleDestinationsStorageTableDirect <a name="MonitorDataCollectionRuleDestinationsStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageTableDirect;

MonitorDataCollectionRuleDestinationsStorageTableDirect.builder()
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
    .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#table_name MonitorDataCollectionRule#table_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#table_name MonitorDataCollectionRule#table_name}.

---

### MonitorDataCollectionRuleIdentity <a name="MonitorDataCollectionRuleIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleIdentity;

MonitorDataCollectionRuleIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#identity_ids MonitorDataCollectionRule#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#identity_ids MonitorDataCollectionRule#identity_ids}.

---

### MonitorDataCollectionRuleStreamDeclaration <a name="MonitorDataCollectionRuleStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclaration;

MonitorDataCollectionRuleStreamDeclaration.builder()
    .column(IResolvable)
    .column(java.util.List<MonitorDataCollectionRuleStreamDeclarationColumn>)
    .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.column">column</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>></code> | column block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream_name MonitorDataCollectionRule#stream_name}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.column"></a>

```java
public java.lang.Object getColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#column MonitorDataCollectionRule#column}

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#stream_name MonitorDataCollectionRule#stream_name}.

---

### MonitorDataCollectionRuleStreamDeclarationColumn <a name="MonitorDataCollectionRuleStreamDeclarationColumn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclarationColumn;

MonitorDataCollectionRuleStreamDeclarationColumn.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}.

---

### MonitorDataCollectionRuleTimeouts <a name="MonitorDataCollectionRuleTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleTimeouts;

MonitorDataCollectionRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#create MonitorDataCollectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#read MonitorDataCollectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#update MonitorDataCollectionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#create MonitorDataCollectionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#read MonitorDataCollectionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/monitor_data_collection_rule#update MonitorDataCollectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDataCollectionRuleDataFlowList <a name="MonitorDataCollectionRuleDataFlowList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataFlowList;

new MonitorDataCollectionRuleDataFlowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get"></a>

```java
public MonitorDataCollectionRuleDataFlowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>>

---


### MonitorDataCollectionRuleDataFlowOutputReference <a name="MonitorDataCollectionRuleDataFlowOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataFlowOutputReference;

new MonitorDataCollectionRuleDataFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetBuiltInTransform">resetBuiltInTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetOutputStream">resetOutputStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetTransformKql">resetTransformKql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuiltInTransform` <a name="resetBuiltInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetBuiltInTransform"></a>

```java
public void resetBuiltInTransform()
```

##### `resetOutputStream` <a name="resetOutputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetOutputStream"></a>

```java
public void resetOutputStream()
```

##### `resetTransformKql` <a name="resetTransformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetTransformKql"></a>

```java
public void resetTransformKql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransformInput">builtInTransformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStreamInput">outputStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKqlInput">transformKqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform">builtInTransform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStream">outputStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKql">transformKql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `builtInTransformInput`<sup>Optional</sup> <a name="builtInTransformInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransformInput"></a>

```java
public java.lang.String getBuiltInTransformInput();
```

- *Type:* java.lang.String

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinationsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputStreamInput`<sup>Optional</sup> <a name="outputStreamInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStreamInput"></a>

```java
public java.lang.String getOutputStreamInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transformKqlInput`<sup>Optional</sup> <a name="transformKqlInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKqlInput"></a>

```java
public java.lang.String getTransformKqlInput();
```

- *Type:* java.lang.String

---

##### `builtInTransform`<sup>Required</sup> <a name="builtInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform"></a>

```java
public java.lang.String getBuiltInTransform();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputStream`<sup>Required</sup> <a name="outputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStream"></a>

```java
public java.lang.String getOutputStream();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transformKql`<sup>Required</sup> <a name="transformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKql"></a>

```java
public java.lang.String getTransformKql();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>

---


### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList;

new MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>>

---


### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference;

new MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resetConsumerGroup">resetConsumerGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroup` <a name="resetConsumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resetConsumerGroup"></a>

```java
public void resetConsumerGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroupInput">consumerGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.streamInput">streamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream">stream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroupInput"></a>

```java
public java.lang.String getConsumerGroupInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.streamInput"></a>

```java
public java.lang.String getStreamInput();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream"></a>

```java
public java.lang.String getStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>

---


### MonitorDataCollectionRuleDataSourcesDataImportOutputReference <a name="MonitorDataCollectionRuleDataSourcesDataImportOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference;

new MonitorDataCollectionRuleDataSourcesDataImportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource">putEventHubDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventHubDataSource` <a name="putEventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource"></a>

```java
public void putEventHubDataSource(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource">eventHubDataSource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSourceInput">eventHubDataSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventHubDataSource`<sup>Required</sup> <a name="eventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList getEventHubDataSource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a>

---

##### `eventHubDataSourceInput`<sup>Optional</sup> <a name="eventHubDataSourceInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSourceInput"></a>

```java
public java.lang.Object getEventHubDataSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---


### MonitorDataCollectionRuleDataSourcesExtensionList <a name="MonitorDataCollectionRuleDataSourcesExtensionList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesExtensionList;

new MonitorDataCollectionRuleDataSourcesExtensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesExtensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>>

---


### MonitorDataCollectionRuleDataSourcesExtensionOutputReference <a name="MonitorDataCollectionRuleDataSourcesExtensionOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference;

new MonitorDataCollectionRuleDataSourcesExtensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetExtensionJson">resetExtensionJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetInputDataSources">resetInputDataSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtensionJson` <a name="resetExtensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetExtensionJson"></a>

```java
public void resetExtensionJson()
```

##### `resetInputDataSources` <a name="resetInputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetInputDataSources"></a>

```java
public void resetInputDataSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJsonInput">extensionJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionNameInput">extensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSourcesInput">inputDataSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson">extensionJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName">extensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources">inputDataSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionJsonInput`<sup>Optional</sup> <a name="extensionJsonInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJsonInput"></a>

```java
public java.lang.String getExtensionJsonInput();
```

- *Type:* java.lang.String

---

##### `extensionNameInput`<sup>Optional</sup> <a name="extensionNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionNameInput"></a>

```java
public java.lang.String getExtensionNameInput();
```

- *Type:* java.lang.String

---

##### `inputDataSourcesInput`<sup>Optional</sup> <a name="inputDataSourcesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSourcesInput"></a>

```java
public java.util.List<java.lang.String> getInputDataSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extensionJson`<sup>Required</sup> <a name="extensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson"></a>

```java
public java.lang.String getExtensionJson();
```

- *Type:* java.lang.String

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName"></a>

```java
public java.lang.String getExtensionName();
```

- *Type:* java.lang.String

---

##### `inputDataSources`<sup>Required</sup> <a name="inputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources"></a>

```java
public java.util.List<java.lang.String> getInputDataSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>

---


### MonitorDataCollectionRuleDataSourcesIisLogList <a name="MonitorDataCollectionRuleDataSourcesIisLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesIisLogList;

new MonitorDataCollectionRuleDataSourcesIisLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesIisLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>>

---


### MonitorDataCollectionRuleDataSourcesIisLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesIisLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference;

new MonitorDataCollectionRuleDataSourcesIisLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resetLogDirectories">resetLogDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogDirectories` <a name="resetLogDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resetLogDirectories"></a>

```java
public void resetLogDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectoriesInput">logDirectoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories">logDirectories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logDirectoriesInput`<sup>Optional</sup> <a name="logDirectoriesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectoriesInput"></a>

```java
public java.util.List<java.lang.String> getLogDirectoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logDirectories`<sup>Required</sup> <a name="logDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories"></a>

```java
public java.util.List<java.lang.String> getLogDirectories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileList <a name="MonitorDataCollectionRuleDataSourcesLogFileList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileList;

new MonitorDataCollectionRuleDataSourcesLogFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>>

---


### MonitorDataCollectionRuleDataSourcesLogFileOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference;

new MonitorDataCollectionRuleDataSourcesLogFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings"></a>

```java
public void putSettings(MonitorDataCollectionRuleDataSourcesLogFileSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatternsInput">filePatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns">filePatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference</a>

---

##### `filePatternsInput`<sup>Optional</sup> <a name="filePatternsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatternsInput"></a>

```java
public java.util.List<java.lang.String> getFilePatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settingsInput"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns"></a>

```java
public java.util.List<java.lang.String> getFilePatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference;

new MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText">putText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText"></a>

```java
public void putText(MonitorDataCollectionRuleDataSourcesLogFileSettingsText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference getText();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.textInput"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettingsText getTextInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference;

new MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormatInput">recordStartTimestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat">recordStartTimestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordStartTimestampFormatInput`<sup>Optional</sup> <a name="recordStartTimestampFormatInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormatInput"></a>

```java
public java.lang.String getRecordStartTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `recordStartTimestampFormat`<sup>Required</sup> <a name="recordStartTimestampFormat" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat"></a>

```java
public java.lang.String getRecordStartTimestampFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileSettingsText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


### MonitorDataCollectionRuleDataSourcesOutputReference <a name="MonitorDataCollectionRuleDataSourcesOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesOutputReference;

new MonitorDataCollectionRuleDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport">putDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog">putIisLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile">putLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter">putPerformanceCounter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry">putPlatformTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder">putPrometheusForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog">putSyslog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog">putWindowsEventLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog">putWindowsFirewallLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetDataImport">resetDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetIisLog">resetIisLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetLogFile">resetLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPerformanceCounter">resetPerformanceCounter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPlatformTelemetry">resetPlatformTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPrometheusForwarder">resetPrometheusForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetSyslog">resetSyslog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsEventLog">resetWindowsEventLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsFirewallLog">resetWindowsFirewallLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataImport` <a name="putDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport"></a>

```java
public void putDataImport(MonitorDataCollectionRuleDataSourcesDataImport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension"></a>

```java
public void putExtension(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesExtension> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>>

---

##### `putIisLog` <a name="putIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog"></a>

```java
public void putIisLog(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesIisLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>>

---

##### `putLogFile` <a name="putLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile"></a>

```java
public void putLogFile(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesLogFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>>

---

##### `putPerformanceCounter` <a name="putPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter"></a>

```java
public void putPerformanceCounter(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesPerformanceCounter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>>

---

##### `putPlatformTelemetry` <a name="putPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry"></a>

```java
public void putPlatformTelemetry(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesPlatformTelemetry> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>>

---

##### `putPrometheusForwarder` <a name="putPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder"></a>

```java
public void putPrometheusForwarder(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesPrometheusForwarder> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>>

---

##### `putSyslog` <a name="putSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog"></a>

```java
public void putSyslog(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesSyslog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>>

---

##### `putWindowsEventLog` <a name="putWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog"></a>

```java
public void putWindowsEventLog(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesWindowsEventLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>>

---

##### `putWindowsFirewallLog` <a name="putWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog"></a>

```java
public void putWindowsFirewallLog(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesWindowsFirewallLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>>

---

##### `resetDataImport` <a name="resetDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetDataImport"></a>

```java
public void resetDataImport()
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetIisLog` <a name="resetIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetIisLog"></a>

```java
public void resetIisLog()
```

##### `resetLogFile` <a name="resetLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetLogFile"></a>

```java
public void resetLogFile()
```

##### `resetPerformanceCounter` <a name="resetPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPerformanceCounter"></a>

```java
public void resetPerformanceCounter()
```

##### `resetPlatformTelemetry` <a name="resetPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPlatformTelemetry"></a>

```java
public void resetPlatformTelemetry()
```

##### `resetPrometheusForwarder` <a name="resetPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPrometheusForwarder"></a>

```java
public void resetPrometheusForwarder()
```

##### `resetSyslog` <a name="resetSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetSyslog"></a>

```java
public void resetSyslog()
```

##### `resetWindowsEventLog` <a name="resetWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsEventLog"></a>

```java
public void resetWindowsEventLog()
```

##### `resetWindowsFirewallLog` <a name="resetWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsFirewallLog"></a>

```java
public void resetWindowsFirewallLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport">dataImport</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference">MonitorDataCollectionRuleDataSourcesDataImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList">MonitorDataCollectionRuleDataSourcesExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog">iisLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList">MonitorDataCollectionRuleDataSourcesIisLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFile">logFile</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList">MonitorDataCollectionRuleDataSourcesLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter">performanceCounter</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList">MonitorDataCollectionRuleDataSourcesPerformanceCounterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry">platformTelemetry</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList">MonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder">prometheusForwarder</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslog">syslog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList">MonitorDataCollectionRuleDataSourcesSyslogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog">windowsEventLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList">MonitorDataCollectionRuleDataSourcesWindowsEventLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog">windowsFirewallLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImportInput">dataImportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extensionInput">extensionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLogInput">iisLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFileInput">logFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounterInput">performanceCounterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetryInput">platformTelemetryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarderInput">prometheusForwarderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslogInput">syslogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLogInput">windowsEventLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLogInput">windowsFirewallLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataImport`<sup>Required</sup> <a name="dataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImportOutputReference getDataImport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference">MonitorDataCollectionRuleDataSourcesDataImportOutputReference</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extension"></a>

```java
public MonitorDataCollectionRuleDataSourcesExtensionList getExtension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList">MonitorDataCollectionRuleDataSourcesExtensionList</a>

---

##### `iisLog`<sup>Required</sup> <a name="iisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog"></a>

```java
public MonitorDataCollectionRuleDataSourcesIisLogList getIisLog();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList">MonitorDataCollectionRuleDataSourcesIisLogList</a>

---

##### `logFile`<sup>Required</sup> <a name="logFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFile"></a>

```java
public MonitorDataCollectionRuleDataSourcesLogFileList getLogFile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList">MonitorDataCollectionRuleDataSourcesLogFileList</a>

---

##### `performanceCounter`<sup>Required</sup> <a name="performanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter"></a>

```java
public MonitorDataCollectionRuleDataSourcesPerformanceCounterList getPerformanceCounter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList">MonitorDataCollectionRuleDataSourcesPerformanceCounterList</a>

---

##### `platformTelemetry`<sup>Required</sup> <a name="platformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry"></a>

```java
public MonitorDataCollectionRuleDataSourcesPlatformTelemetryList getPlatformTelemetry();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList">MonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a>

---

##### `prometheusForwarder`<sup>Required</sup> <a name="prometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder"></a>

```java
public MonitorDataCollectionRuleDataSourcesPrometheusForwarderList getPrometheusForwarder();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a>

---

##### `syslog`<sup>Required</sup> <a name="syslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslog"></a>

```java
public MonitorDataCollectionRuleDataSourcesSyslogList getSyslog();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList">MonitorDataCollectionRuleDataSourcesSyslogList</a>

---

##### `windowsEventLog`<sup>Required</sup> <a name="windowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog"></a>

```java
public MonitorDataCollectionRuleDataSourcesWindowsEventLogList getWindowsEventLog();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList">MonitorDataCollectionRuleDataSourcesWindowsEventLogList</a>

---

##### `windowsFirewallLog`<sup>Required</sup> <a name="windowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog"></a>

```java
public MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList getWindowsFirewallLog();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a>

---

##### `dataImportInput`<sup>Optional</sup> <a name="dataImportInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImportInput"></a>

```java
public MonitorDataCollectionRuleDataSourcesDataImport getDataImportInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extensionInput"></a>

```java
public java.lang.Object getExtensionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>>

---

##### `iisLogInput`<sup>Optional</sup> <a name="iisLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLogInput"></a>

```java
public java.lang.Object getIisLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>>

---

##### `logFileInput`<sup>Optional</sup> <a name="logFileInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFileInput"></a>

```java
public java.lang.Object getLogFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>>

---

##### `performanceCounterInput`<sup>Optional</sup> <a name="performanceCounterInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounterInput"></a>

```java
public java.lang.Object getPerformanceCounterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>>

---

##### `platformTelemetryInput`<sup>Optional</sup> <a name="platformTelemetryInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetryInput"></a>

```java
public java.lang.Object getPlatformTelemetryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>>

---

##### `prometheusForwarderInput`<sup>Optional</sup> <a name="prometheusForwarderInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarderInput"></a>

```java
public java.lang.Object getPrometheusForwarderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>>

---

##### `syslogInput`<sup>Optional</sup> <a name="syslogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslogInput"></a>

```java
public java.lang.Object getSyslogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>>

---

##### `windowsEventLogInput`<sup>Optional</sup> <a name="windowsEventLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLogInput"></a>

```java
public java.lang.Object getWindowsEventLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>>

---

##### `windowsFirewallLogInput`<sup>Optional</sup> <a name="windowsFirewallLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLogInput"></a>

```java
public java.lang.Object getWindowsFirewallLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDataSources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---


### MonitorDataCollectionRuleDataSourcesPerformanceCounterList <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounterList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList;

new MonitorDataCollectionRuleDataSourcesPerformanceCounterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>>

---


### MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference;

new MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiersInput">counterSpecifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSecondsInput">samplingFrequencyInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers">counterSpecifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds">samplingFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `counterSpecifiersInput`<sup>Optional</sup> <a name="counterSpecifiersInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiersInput"></a>

```java
public java.util.List<java.lang.String> getCounterSpecifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `samplingFrequencyInSecondsInput`<sup>Optional</sup> <a name="samplingFrequencyInSecondsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSecondsInput"></a>

```java
public java.lang.Number getSamplingFrequencyInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `counterSpecifiers`<sup>Required</sup> <a name="counterSpecifiers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers"></a>

```java
public java.util.List<java.lang.String> getCounterSpecifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `samplingFrequencyInSeconds`<sup>Required</sup> <a name="samplingFrequencyInSeconds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds"></a>

```java
public java.lang.Number getSamplingFrequencyInSeconds();
```

- *Type:* java.lang.Number

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>

---


### MonitorDataCollectionRuleDataSourcesPlatformTelemetryList <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetryList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList;

new MonitorDataCollectionRuleDataSourcesPlatformTelemetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>>

---


### MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference;

new MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList;

new MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference;

new MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderList <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList;

new MonitorDataCollectionRuleDataSourcesPrometheusForwarderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference;

new MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter">putLabelIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resetLabelIncludeFilter">resetLabelIncludeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelIncludeFilter` <a name="putLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter"></a>

```java
public void putLabelIncludeFilter(IResolvable OR java.util.List<MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>>

---

##### `resetLabelIncludeFilter` <a name="resetLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resetLabelIncludeFilter"></a>

```java
public void resetLabelIncludeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter">labelIncludeFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilterInput">labelIncludeFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelIncludeFilter`<sup>Required</sup> <a name="labelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter"></a>

```java
public MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList getLabelIncludeFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a>

---

##### `labelIncludeFilterInput`<sup>Optional</sup> <a name="labelIncludeFilterInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilterInput"></a>

```java
public java.lang.Object getLabelIncludeFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>

---


### MonitorDataCollectionRuleDataSourcesSyslogList <a name="MonitorDataCollectionRuleDataSourcesSyslogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesSyslogList;

new MonitorDataCollectionRuleDataSourcesSyslogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesSyslogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>>

---


### MonitorDataCollectionRuleDataSourcesSyslogOutputReference <a name="MonitorDataCollectionRuleDataSourcesSyslogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference;

new MonitorDataCollectionRuleDataSourcesSyslogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNamesInput">facilityNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevelsInput">logLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames">facilityNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels">logLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `facilityNamesInput`<sup>Optional</sup> <a name="facilityNamesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNamesInput"></a>

```java
public java.util.List<java.lang.String> getFacilityNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logLevelsInput`<sup>Optional</sup> <a name="logLevelsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevelsInput"></a>

```java
public java.util.List<java.lang.String> getLogLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `facilityNames`<sup>Required</sup> <a name="facilityNames" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames"></a>

```java
public java.util.List<java.lang.String> getFacilityNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logLevels`<sup>Required</sup> <a name="logLevels" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels"></a>

```java
public java.util.List<java.lang.String> getLogLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>

---


### MonitorDataCollectionRuleDataSourcesWindowsEventLogList <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList;

new MonitorDataCollectionRuleDataSourcesWindowsEventLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>>

---


### MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference;

new MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueriesInput">xPathQueriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries">xPathQueries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xPathQueriesInput`<sup>Optional</sup> <a name="xPathQueriesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueriesInput"></a>

```java
public java.util.List<java.lang.String> getXPathQueriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xPathQueries`<sup>Required</sup> <a name="xPathQueries" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries"></a>

```java
public java.util.List<java.lang.String> getXPathQueries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>

---


### MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList;

new MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get"></a>

```java
public MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>>

---


### MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference;

new MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams">streams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streamsInput"></a>

```java
public java.util.List<java.lang.String> getStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams"></a>

```java
public java.util.List<java.lang.String> getStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>

---


### MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference <a name="MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference;

new MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDestinationsAzureMonitorMetrics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---


### MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference;

new MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubIdInput">eventHubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId">eventHubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventHubIdInput`<sup>Optional</sup> <a name="eventHubIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubIdInput"></a>

```java
public java.lang.String getEventHubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId"></a>

```java
public java.lang.String getEventHubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHubDirect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---


### MonitorDataCollectionRuleDestinationsEventHubOutputReference <a name="MonitorDataCollectionRuleDestinationsEventHubOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsEventHubOutputReference;

new MonitorDataCollectionRuleDestinationsEventHubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubIdInput">eventHubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId">eventHubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventHubIdInput`<sup>Optional</sup> <a name="eventHubIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubIdInput"></a>

```java
public java.lang.String getEventHubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId"></a>

```java
public java.lang.String getEventHubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---


### MonitorDataCollectionRuleDestinationsLogAnalyticsList <a name="MonitorDataCollectionRuleDestinationsLogAnalyticsList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsLogAnalyticsList;

new MonitorDataCollectionRuleDestinationsLogAnalyticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get"></a>

```java
public MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>>

---


### MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference <a name="MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference;

new MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceIdInput">workspaceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId">workspaceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceResourceIdInput`<sup>Optional</sup> <a name="workspaceResourceIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceIdInput"></a>

```java
public java.lang.String getWorkspaceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId"></a>

```java
public java.lang.String getWorkspaceResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>

---


### MonitorDataCollectionRuleDestinationsMonitorAccountList <a name="MonitorDataCollectionRuleDestinationsMonitorAccountList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsMonitorAccountList;

new MonitorDataCollectionRuleDestinationsMonitorAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get"></a>

```java
public MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>>

---


### MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference <a name="MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference;

new MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountIdInput">monitorAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId">monitorAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monitorAccountIdInput`<sup>Optional</sup> <a name="monitorAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountIdInput"></a>

```java
public java.lang.String getMonitorAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `monitorAccountId`<sup>Required</sup> <a name="monitorAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId"></a>

```java
public java.lang.String getMonitorAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>

---


### MonitorDataCollectionRuleDestinationsOutputReference <a name="MonitorDataCollectionRuleDestinationsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsOutputReference;

new MonitorDataCollectionRuleDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics">putAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub">putEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect">putEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics">putLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount">putMonitorAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob">putStorageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect">putStorageBlobDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect">putStorageTableDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetAzureMonitorMetrics">resetAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHubDirect">resetEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetLogAnalytics">resetLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetMonitorAccount">resetMonitorAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlob">resetStorageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlobDirect">resetStorageBlobDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageTableDirect">resetStorageTableDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureMonitorMetrics` <a name="putAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics"></a>

```java
public void putAzureMonitorMetrics(MonitorDataCollectionRuleDestinationsAzureMonitorMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---

##### `putEventHub` <a name="putEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub"></a>

```java
public void putEventHub(MonitorDataCollectionRuleDestinationsEventHub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---

##### `putEventHubDirect` <a name="putEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect"></a>

```java
public void putEventHubDirect(MonitorDataCollectionRuleDestinationsEventHubDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---

##### `putLogAnalytics` <a name="putLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics"></a>

```java
public void putLogAnalytics(IResolvable OR java.util.List<MonitorDataCollectionRuleDestinationsLogAnalytics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>>

---

##### `putMonitorAccount` <a name="putMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount"></a>

```java
public void putMonitorAccount(IResolvable OR java.util.List<MonitorDataCollectionRuleDestinationsMonitorAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>>

---

##### `putStorageBlob` <a name="putStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob"></a>

```java
public void putStorageBlob(IResolvable OR java.util.List<MonitorDataCollectionRuleDestinationsStorageBlob> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>>

---

##### `putStorageBlobDirect` <a name="putStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect"></a>

```java
public void putStorageBlobDirect(IResolvable OR java.util.List<MonitorDataCollectionRuleDestinationsStorageBlobDirect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>>

---

##### `putStorageTableDirect` <a name="putStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect"></a>

```java
public void putStorageTableDirect(IResolvable OR java.util.List<MonitorDataCollectionRuleDestinationsStorageTableDirect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>>

---

##### `resetAzureMonitorMetrics` <a name="resetAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetAzureMonitorMetrics"></a>

```java
public void resetAzureMonitorMetrics()
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHub"></a>

```java
public void resetEventHub()
```

##### `resetEventHubDirect` <a name="resetEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHubDirect"></a>

```java
public void resetEventHubDirect()
```

##### `resetLogAnalytics` <a name="resetLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetLogAnalytics"></a>

```java
public void resetLogAnalytics()
```

##### `resetMonitorAccount` <a name="resetMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetMonitorAccount"></a>

```java
public void resetMonitorAccount()
```

##### `resetStorageBlob` <a name="resetStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlob"></a>

```java
public void resetStorageBlob()
```

##### `resetStorageBlobDirect` <a name="resetStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlobDirect"></a>

```java
public void resetStorageBlobDirect()
```

##### `resetStorageTableDirect` <a name="resetStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageTableDirect"></a>

```java
public void resetStorageTableDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics">azureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference">MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference">MonitorDataCollectionRuleDestinationsEventHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect">eventHubDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference">MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList">MonitorDataCollectionRuleDestinationsLogAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount">monitorAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList">MonitorDataCollectionRuleDestinationsMonitorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob">storageBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList">MonitorDataCollectionRuleDestinationsStorageBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect">storageBlobDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList">MonitorDataCollectionRuleDestinationsStorageBlobDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect">storageTableDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList">MonitorDataCollectionRuleDestinationsStorageTableDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetricsInput">azureMonitorMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirectInput">eventHubDirectInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubInput">eventHubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalyticsInput">logAnalyticsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccountInput">monitorAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirectInput">storageBlobDirectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobInput">storageBlobInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirectInput">storageTableDirectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureMonitorMetrics`<sup>Required</sup> <a name="azureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics"></a>

```java
public MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference getAzureMonitorMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference">MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference</a>

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHub"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHubOutputReference getEventHub();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference">MonitorDataCollectionRuleDestinationsEventHubOutputReference</a>

---

##### `eventHubDirect`<sup>Required</sup> <a name="eventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference getEventHubDirect();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference">MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference</a>

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics"></a>

```java
public MonitorDataCollectionRuleDestinationsLogAnalyticsList getLogAnalytics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList">MonitorDataCollectionRuleDestinationsLogAnalyticsList</a>

---

##### `monitorAccount`<sup>Required</sup> <a name="monitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount"></a>

```java
public MonitorDataCollectionRuleDestinationsMonitorAccountList getMonitorAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList">MonitorDataCollectionRuleDestinationsMonitorAccountList</a>

---

##### `storageBlob`<sup>Required</sup> <a name="storageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageBlobList getStorageBlob();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList">MonitorDataCollectionRuleDestinationsStorageBlobList</a>

---

##### `storageBlobDirect`<sup>Required</sup> <a name="storageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageBlobDirectList getStorageBlobDirect();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList">MonitorDataCollectionRuleDestinationsStorageBlobDirectList</a>

---

##### `storageTableDirect`<sup>Required</sup> <a name="storageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageTableDirectList getStorageTableDirect();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList">MonitorDataCollectionRuleDestinationsStorageTableDirectList</a>

---

##### `azureMonitorMetricsInput`<sup>Optional</sup> <a name="azureMonitorMetricsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetricsInput"></a>

```java
public MonitorDataCollectionRuleDestinationsAzureMonitorMetrics getAzureMonitorMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---

##### `eventHubDirectInput`<sup>Optional</sup> <a name="eventHubDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirectInput"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHubDirect getEventHubDirectInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubInput"></a>

```java
public MonitorDataCollectionRuleDestinationsEventHub getEventHubInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---

##### `logAnalyticsInput`<sup>Optional</sup> <a name="logAnalyticsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalyticsInput"></a>

```java
public java.lang.Object getLogAnalyticsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>>

---

##### `monitorAccountInput`<sup>Optional</sup> <a name="monitorAccountInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccountInput"></a>

```java
public java.lang.Object getMonitorAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>>

---

##### `storageBlobDirectInput`<sup>Optional</sup> <a name="storageBlobDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirectInput"></a>

```java
public java.lang.Object getStorageBlobDirectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>>

---

##### `storageBlobInput`<sup>Optional</sup> <a name="storageBlobInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobInput"></a>

```java
public java.lang.Object getStorageBlobInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>>

---

##### `storageTableDirectInput`<sup>Optional</sup> <a name="storageTableDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirectInput"></a>

```java
public java.lang.Object getStorageTableDirectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleDestinations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---


### MonitorDataCollectionRuleDestinationsStorageBlobDirectList <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirectList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList;

new MonitorDataCollectionRuleDestinationsStorageBlobDirectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>>

---


### MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference;

new MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>

---


### MonitorDataCollectionRuleDestinationsStorageBlobList <a name="MonitorDataCollectionRuleDestinationsStorageBlobList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlobList;

new MonitorDataCollectionRuleDestinationsStorageBlobList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageBlobOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>>

---


### MonitorDataCollectionRuleDestinationsStorageBlobOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageBlobOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference;

new MonitorDataCollectionRuleDestinationsStorageBlobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>

---


### MonitorDataCollectionRuleDestinationsStorageTableDirectList <a name="MonitorDataCollectionRuleDestinationsStorageTableDirectList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageTableDirectList;

new MonitorDataCollectionRuleDestinationsStorageTableDirectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get"></a>

```java
public MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>>

---


### MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference;

new MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>

---


### MonitorDataCollectionRuleIdentityOutputReference <a name="MonitorDataCollectionRuleIdentityOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleIdentityOutputReference;

new MonitorDataCollectionRuleIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.internalValue"></a>

```java
public MonitorDataCollectionRuleIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---


### MonitorDataCollectionRuleStreamDeclarationColumnList <a name="MonitorDataCollectionRuleStreamDeclarationColumnList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclarationColumnList;

new MonitorDataCollectionRuleStreamDeclarationColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get"></a>

```java
public MonitorDataCollectionRuleStreamDeclarationColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>>

---


### MonitorDataCollectionRuleStreamDeclarationColumnOutputReference <a name="MonitorDataCollectionRuleStreamDeclarationColumnOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference;

new MonitorDataCollectionRuleStreamDeclarationColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>

---


### MonitorDataCollectionRuleStreamDeclarationList <a name="MonitorDataCollectionRuleStreamDeclarationList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclarationList;

new MonitorDataCollectionRuleStreamDeclarationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get"></a>

```java
public MonitorDataCollectionRuleStreamDeclarationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>>

---


### MonitorDataCollectionRuleStreamDeclarationOutputReference <a name="MonitorDataCollectionRuleStreamDeclarationOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleStreamDeclarationOutputReference;

new MonitorDataCollectionRuleStreamDeclarationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn">putColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn"></a>

```java
public void putColumn(IResolvable OR java.util.List<MonitorDataCollectionRuleStreamDeclarationColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList">MonitorDataCollectionRuleStreamDeclarationColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.columnInput">columnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.column"></a>

```java
public MonitorDataCollectionRuleStreamDeclarationColumnList getColumn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList">MonitorDataCollectionRuleStreamDeclarationColumnList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.columnInput"></a>

```java
public java.lang.Object getColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>>

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>

---


### MonitorDataCollectionRuleTimeoutsOutputReference <a name="MonitorDataCollectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule.MonitorDataCollectionRuleTimeoutsOutputReference;

new MonitorDataCollectionRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---



