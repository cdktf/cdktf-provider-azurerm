# `azurerm_network_manager_admin_rule`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_admin_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule).

# `networkManagerAdminRule` Submodule <a name="`networkManagerAdminRule` Submodule" id="@cdktf/provider-azurerm.networkManagerAdminRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerAdminRule <a name="NetworkManagerAdminRule" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule azurerm_network_manager_admin_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRule(Construct Scope, string Id, NetworkManagerAdminRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges">ResetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination"></a>

```csharp
private void PutDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagerAdminRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetDestinationPortRanges` <a name="ResetDestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges"></a>

```csharp
private void ResetDestinationPortRanges()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges"></a>

```csharp
private void ResetSourcePortRanges()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerAdminRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerAdminRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerAdminRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput">AdminRuleCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput">DestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput">DestinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId">AdminRuleCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination"></a>

```csharp
public NetworkManagerAdminRuleDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source"></a>

```csharp
public NetworkManagerAdminRuleSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts"></a>

```csharp
public NetworkManagerAdminRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `AdminRuleCollectionIdInput`<sup>Optional</sup> <a name="AdminRuleCollectionIdInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput"></a>

```csharp
public string AdminRuleCollectionIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput"></a>

```csharp
public object DestinationInput { get; }
```

- *Type:* object

---

##### `DestinationPortRangesInput`<sup>Optional</sup> <a name="DestinationPortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput"></a>

```csharp
public string[] DestinationPortRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput"></a>

```csharp
public string[] SourcePortRangesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AdminRuleCollectionId`<sup>Required</sup> <a name="AdminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId"></a>

```csharp
public string AdminRuleCollectionId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAdminRuleConfig <a name="NetworkManagerAdminRuleConfig" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string AdminRuleCollectionId,
    string Direction,
    string Name,
    double Priority,
    string Protocol,
    string Description = null,
    object Destination = null,
    string[] DestinationPortRanges = null,
    string Id = null,
    object Source = null,
    string[] SourcePortRanges = null,
    NetworkManagerAdminRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId">AdminRuleCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination">Destination</a></code> | <code>object</code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source">Source</a></code> | <code>object</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}.

---

##### `AdminRuleCollectionId`<sup>Required</sup> <a name="AdminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId"></a>

```csharp
public string AdminRuleCollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}.

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination"></a>

```csharp
public object Destination { get; set; }
```

- *Type:* object

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#destination NetworkManagerAdminRule#destination}

---

##### `DestinationPortRanges`<sup>Optional</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#source NetworkManagerAdminRule#source}

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts"></a>

```csharp
public NetworkManagerAdminRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#timeouts NetworkManagerAdminRule#timeouts}

---

### NetworkManagerAdminRuleDestination <a name="NetworkManagerAdminRuleDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleDestination {
    string AddressPrefix,
    string AddressPrefixType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix">AddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType">AddressPrefixType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix"></a>

```csharp
public string AddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType"></a>

```csharp
public string AddressPrefixType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleSource <a name="NetworkManagerAdminRuleSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleSource {
    string AddressPrefix,
    string AddressPrefixType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix">AddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType">AddressPrefixType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix"></a>

```csharp
public string AddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType"></a>

```csharp
public string AddressPrefixType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleTimeouts <a name="NetworkManagerAdminRuleTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerAdminRuleDestinationList <a name="NetworkManagerAdminRuleDestinationList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get"></a>

```csharp
private NetworkManagerAdminRuleDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkManagerAdminRuleDestinationOutputReference <a name="NetworkManagerAdminRuleDestinationOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput">AddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput">AddressPrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix">AddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType">AddressPrefixType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressPrefixInput`<sup>Optional</sup> <a name="AddressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput"></a>

```csharp
public string AddressPrefixInput { get; }
```

- *Type:* string

---

##### `AddressPrefixTypeInput`<sup>Optional</sup> <a name="AddressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput"></a>

```csharp
public string AddressPrefixTypeInput { get; }
```

- *Type:* string

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix"></a>

```csharp
public string AddressPrefix { get; }
```

- *Type:* string

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType"></a>

```csharp
public string AddressPrefixType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkManagerAdminRuleSourceList <a name="NetworkManagerAdminRuleSourceList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get"></a>

```csharp
private NetworkManagerAdminRuleSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkManagerAdminRuleSourceOutputReference <a name="NetworkManagerAdminRuleSourceOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput">AddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput">AddressPrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix">AddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType">AddressPrefixType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressPrefixInput`<sup>Optional</sup> <a name="AddressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput"></a>

```csharp
public string AddressPrefixInput { get; }
```

- *Type:* string

---

##### `AddressPrefixTypeInput`<sup>Optional</sup> <a name="AddressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput"></a>

```csharp
public string AddressPrefixTypeInput { get; }
```

- *Type:* string

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix"></a>

```csharp
public string AddressPrefix { get; }
```

- *Type:* string

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType"></a>

```csharp
public string AddressPrefixType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkManagerAdminRuleTimeoutsOutputReference <a name="NetworkManagerAdminRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerAdminRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



