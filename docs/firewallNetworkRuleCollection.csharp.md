# `azurerm_firewall_network_rule_collection`

Refer to the Terraform Registory for docs: [`azurerm_firewall_network_rule_collection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection).

# `firewallNetworkRuleCollection` Submodule <a name="`firewallNetworkRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNetworkRuleCollection <a name="FirewallNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection azurerm_firewall_network_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollection(Construct Scope, string Id, FirewallNetworkRuleCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig">FirewallNetworkRuleCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig">FirewallNetworkRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts"></a>

```csharp
private void PutTimeouts(FirewallNetworkRuleCollectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallNetworkRuleCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallNetworkRuleCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallNetworkRuleCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallNetworkRuleCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallNetworkRuleCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallNetworkRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirewallNetworkRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput">AzureFirewallNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName">AzureFirewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule"></a>

```csharp
public FirewallNetworkRuleCollectionRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts"></a>

```csharp
public FirewallNetworkRuleCollectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `AzureFirewallNameInput`<sup>Optional</sup> <a name="AzureFirewallNameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput"></a>

```csharp
public string AzureFirewallNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName"></a>

```csharp
public string AzureFirewallName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNetworkRuleCollectionConfig <a name="FirewallNetworkRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string AzureFirewallName,
    string Name,
    double Priority,
    string ResourceGroupName,
    object Rule,
    string Id = null,
    FirewallNetworkRuleCollectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName">AzureFirewallName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}.

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName"></a>

```csharp
public string AzureFirewallName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#rule FirewallNetworkRuleCollection#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts"></a>

```csharp
public FirewallNetworkRuleCollectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#timeouts FirewallNetworkRuleCollection#timeouts}

---

### FirewallNetworkRuleCollectionRule <a name="FirewallNetworkRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionRule {
    string[] DestinationPorts,
    string Name,
    string[] Protocols,
    string Description = null,
    string[] DestinationAddresses = null,
    string[] DestinationFqdns = null,
    string[] DestinationIpGroups = null,
    string[] SourceAddresses = null,
    string[] SourceIpGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns">DestinationFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups">DestinationIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}. |

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}.

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}.

---

##### `DestinationFqdns`<sup>Optional</sup> <a name="DestinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns"></a>

```csharp
public string[] DestinationFqdns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}.

---

##### `DestinationIpGroups`<sup>Optional</sup> <a name="DestinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups"></a>

```csharp
public string[] DestinationIpGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}.

---

##### `SourceIpGroups`<sup>Optional</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}.

---

### FirewallNetworkRuleCollectionTimeouts <a name="FirewallNetworkRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNetworkRuleCollectionRuleList <a name="FirewallNetworkRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get"></a>

```csharp
private FirewallNetworkRuleCollectionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallNetworkRuleCollectionRuleOutputReference <a name="FirewallNetworkRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns">ResetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups">ResetDestinationIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups">ResetSourceIpGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```csharp
private void ResetDestinationAddresses()
```

##### `ResetDestinationFqdns` <a name="ResetDestinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```csharp
private void ResetDestinationFqdns()
```

##### `ResetDestinationIpGroups` <a name="ResetDestinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups"></a>

```csharp
private void ResetDestinationIpGroups()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```csharp
private void ResetSourceAddresses()
```

##### `ResetSourceIpGroups` <a name="ResetSourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```csharp
private void ResetSourceIpGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput">DestinationFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput">DestinationIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">SourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns">DestinationFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups">DestinationIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```csharp
public string[] DestinationAddressesInput { get; }
```

- *Type:* string[]

---

##### `DestinationFqdnsInput`<sup>Optional</sup> <a name="DestinationFqdnsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```csharp
public string[] DestinationFqdnsInput { get; }
```

- *Type:* string[]

---

##### `DestinationIpGroupsInput`<sup>Optional</sup> <a name="DestinationIpGroupsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput"></a>

```csharp
public string[] DestinationIpGroupsInput { get; }
```

- *Type:* string[]

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```csharp
public string[] DestinationPortsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```csharp
public string[] SourceAddressesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpGroupsInput`<sup>Optional</sup> <a name="SourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```csharp
public string[] SourceIpGroupsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationFqdns`<sup>Required</sup> <a name="DestinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```csharp
public string[] DestinationFqdns { get; }
```

- *Type:* string[]

---

##### `DestinationIpGroups`<sup>Required</sup> <a name="DestinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups"></a>

```csharp
public string[] DestinationIpGroups { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourceIpGroups`<sup>Required</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallNetworkRuleCollectionTimeoutsOutputReference <a name="FirewallNetworkRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallNetworkRuleCollectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



