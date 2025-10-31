# `networkManagerRoutingRule` Submodule <a name="`networkManagerRoutingRule` Submodule" id="@cdktf/provider-azurerm.networkManagerRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerRoutingRule <a name="NetworkManagerRoutingRule" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule azurerm_network_manager_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRule;

NetworkManagerRoutingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destination(NetworkManagerRoutingRuleDestination)
    .name(java.lang.String)
    .nextHop(NetworkManagerRoutingRuleNextHop)
    .ruleCollectionId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerRoutingRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.nextHop">nextHop</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | next_hop block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.ruleCollectionId">ruleCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#destination NetworkManagerRoutingRule#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.nextHop"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

next_hop block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#next_hop NetworkManagerRoutingRule#next_hop}

---

##### `ruleCollectionId`<sup>Required</sup> <a name="ruleCollectionId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.ruleCollectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#timeouts NetworkManagerRoutingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop">putNextHop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination"></a>

```java
public void putDestination(NetworkManagerRoutingRuleDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---

##### `putNextHop` <a name="putNextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop"></a>

```java
public void putNextHop(NetworkManagerRoutingRuleNextHop value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts"></a>

```java
public void putTimeouts(NetworkManagerRoutingRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerRoutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRule;

NetworkManagerRoutingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRule;

NetworkManagerRoutingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRule;

NetworkManagerRoutingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRule;

NetworkManagerRoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkManagerRoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkManagerRoutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkManagerRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkManagerRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference">NetworkManagerRoutingRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHop">nextHop</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference">NetworkManagerRoutingRuleNextHopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference">NetworkManagerRoutingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHopInput">nextHopInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionIdInput">ruleCollectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionId">ruleCollectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destination"></a>

```java
public NetworkManagerRoutingRuleDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference">NetworkManagerRoutingRuleDestinationOutputReference</a>

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHop"></a>

```java
public NetworkManagerRoutingRuleNextHopOutputReference getNextHop();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference">NetworkManagerRoutingRuleNextHopOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeouts"></a>

```java
public NetworkManagerRoutingRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference">NetworkManagerRoutingRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destinationInput"></a>

```java
public NetworkManagerRoutingRuleDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHopInput"></a>

```java
public NetworkManagerRoutingRuleNextHop getNextHopInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---

##### `ruleCollectionIdInput`<sup>Optional</sup> <a name="ruleCollectionIdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionIdInput"></a>

```java
public java.lang.String getRuleCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeoutsInput"></a>

```java
public IResolvable|NetworkManagerRoutingRuleTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ruleCollectionId`<sup>Required</sup> <a name="ruleCollectionId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionId"></a>

```java
public java.lang.String getRuleCollectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerRoutingRuleConfig <a name="NetworkManagerRoutingRuleConfig" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleConfig;

NetworkManagerRoutingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destination(NetworkManagerRoutingRuleDestination)
    .name(java.lang.String)
    .nextHop(NetworkManagerRoutingRuleNextHop)
    .ruleCollectionId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerRoutingRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.nextHop">nextHop</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | next_hop block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.ruleCollectionId">ruleCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.destination"></a>

```java
public NetworkManagerRoutingRuleDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#destination NetworkManagerRoutingRule#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.nextHop"></a>

```java
public NetworkManagerRoutingRuleNextHop getNextHop();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

next_hop block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#next_hop NetworkManagerRoutingRule#next_hop}

---

##### `ruleCollectionId`<sup>Required</sup> <a name="ruleCollectionId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.ruleCollectionId"></a>

```java
public java.lang.String getRuleCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.timeouts"></a>

```java
public NetworkManagerRoutingRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#timeouts NetworkManagerRoutingRule#timeouts}

---

### NetworkManagerRoutingRuleDestination <a name="NetworkManagerRoutingRuleDestination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleDestination;

NetworkManagerRoutingRuleDestination.builder()
    .address(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}.

---

### NetworkManagerRoutingRuleNextHop <a name="NetworkManagerRoutingRuleNextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleNextHop;

NetworkManagerRoutingRuleNextHop.builder()
    .type(java.lang.String)
//  .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}.

---

### NetworkManagerRoutingRuleTimeouts <a name="NetworkManagerRoutingRuleTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleTimeouts;

NetworkManagerRoutingRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#create NetworkManagerRoutingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#delete NetworkManagerRoutingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#read NetworkManagerRoutingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#update NetworkManagerRoutingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#create NetworkManagerRoutingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#delete NetworkManagerRoutingRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#read NetworkManagerRoutingRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#update NetworkManagerRoutingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerRoutingRuleDestinationOutputReference <a name="NetworkManagerRoutingRuleDestinationOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleDestinationOutputReference;

new NetworkManagerRoutingRuleDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.internalValue"></a>

```java
public NetworkManagerRoutingRuleDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---


### NetworkManagerRoutingRuleNextHopOutputReference <a name="NetworkManagerRoutingRuleNextHopOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleNextHopOutputReference;

new NetworkManagerRoutingRuleNextHopOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resetAddress"></a>

```java
public void resetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.internalValue"></a>

```java
public NetworkManagerRoutingRuleNextHop getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---


### NetworkManagerRoutingRuleTimeoutsOutputReference <a name="NetworkManagerRoutingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_routing_rule.NetworkManagerRoutingRuleTimeoutsOutputReference;

new NetworkManagerRoutingRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkManagerRoutingRuleTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---



