# `networkManagerRoutingRuleCollection` Submodule <a name="`networkManagerRoutingRuleCollection` Submodule" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerRoutingRuleCollection <a name="NetworkManagerRoutingRuleCollection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection azurerm_network_manager_routing_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollection;

NetworkManagerRoutingRuleCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkGroupIds(java.util.List<java.lang.String>)
    .routingConfigurationId(java.lang.String)
//  .bgpRoutePropagationEnabled(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerRoutingRuleCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.routingConfigurationId">routingConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.bgpRoutePropagationEnabled">bgpRoutePropagationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.networkGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}.

---

##### `routingConfigurationId`<sup>Required</sup> <a name="routingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.routingConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}.

---

##### `bgpRoutePropagationEnabled`<sup>Optional</sup> <a name="bgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.bgpRoutePropagationEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#timeouts NetworkManagerRoutingRuleCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled">resetBgpRoutePropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts"></a>

```java
public void putTimeouts(NetworkManagerRoutingRuleCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---

##### `resetBgpRoutePropagationEnabled` <a name="resetBgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled"></a>

```java
public void resetBgpRoutePropagationEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollection;

NetworkManagerRoutingRuleCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollection;

NetworkManagerRoutingRuleCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollection;

NetworkManagerRoutingRuleCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollection;

NetworkManagerRoutingRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkManagerRoutingRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkManagerRoutingRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkManagerRoutingRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerRoutingRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput">bgpRoutePropagationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput">networkGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput">routingConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled">bgpRoutePropagationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId">routingConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts"></a>

```java
public NetworkManagerRoutingRuleCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a>

---

##### `bgpRoutePropagationEnabledInput`<sup>Optional</sup> <a name="bgpRoutePropagationEnabledInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getBgpRoutePropagationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkGroupIdsInput`<sup>Optional</sup> <a name="networkGroupIdsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routingConfigurationIdInput`<sup>Optional</sup> <a name="routingConfigurationIdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput"></a>

```java
public java.lang.String getRoutingConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput"></a>

```java
public IResolvable|NetworkManagerRoutingRuleCollectionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---

##### `bgpRoutePropagationEnabled`<sup>Required</sup> <a name="bgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBgpRoutePropagationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routingConfigurationId`<sup>Required</sup> <a name="routingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId"></a>

```java
public java.lang.String getRoutingConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerRoutingRuleCollectionConfig <a name="NetworkManagerRoutingRuleCollectionConfig" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollectionConfig;

NetworkManagerRoutingRuleCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkGroupIds(java.util.List<java.lang.String>)
    .routingConfigurationId(java.lang.String)
//  .bgpRoutePropagationEnabled(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerRoutingRuleCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId">routingConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled">bgpRoutePropagationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}.

---

##### `routingConfigurationId`<sup>Required</sup> <a name="routingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId"></a>

```java
public java.lang.String getRoutingConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}.

---

##### `bgpRoutePropagationEnabled`<sup>Optional</sup> <a name="bgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBgpRoutePropagationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts"></a>

```java
public NetworkManagerRoutingRuleCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#timeouts NetworkManagerRoutingRuleCollection#timeouts}

---

### NetworkManagerRoutingRuleCollectionTimeouts <a name="NetworkManagerRoutingRuleCollectionTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollectionTimeouts;

NetworkManagerRoutingRuleCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerRoutingRuleCollectionTimeoutsOutputReference <a name="NetworkManagerRoutingRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule_collection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference;

new NetworkManagerRoutingRuleCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkManagerRoutingRuleCollectionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---



