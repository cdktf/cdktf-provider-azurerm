# `firewallApplicationRuleCollection` Submodule <a name="`firewallApplicationRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallApplicationRuleCollection <a name="FirewallApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection azurerm_firewall_application_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollection(Construct Scope, string Id, FirewallApplicationRuleCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig">FirewallApplicationRuleCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig">FirewallApplicationRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts"></a>

```csharp
private void PutTimeouts(FirewallApplicationRuleCollectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallApplicationRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallApplicationRuleCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallApplicationRuleCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallApplicationRuleCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallApplicationRuleCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirewallApplicationRuleCollection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallApplicationRuleCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallApplicationRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirewallApplicationRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList">FirewallApplicationRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference">FirewallApplicationRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallNameInput">AzureFirewallNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallName">AzureFirewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.rule"></a>

```csharp
public FirewallApplicationRuleCollectionRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList">FirewallApplicationRuleCollectionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeouts"></a>

```csharp
public FirewallApplicationRuleCollectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference">FirewallApplicationRuleCollectionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `AzureFirewallNameInput`<sup>Optional</sup> <a name="AzureFirewallNameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallNameInput"></a>

```csharp
public string AzureFirewallNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallName"></a>

```csharp
public string AzureFirewallName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallApplicationRuleCollectionConfig <a name="FirewallApplicationRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionConfig {
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
    FirewallApplicationRuleCollectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.azureFirewallName">AzureFirewallName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}.

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.azureFirewallName"></a>

```csharp
public string AzureFirewallName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#rule FirewallApplicationRuleCollection#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.timeouts"></a>

```csharp
public FirewallApplicationRuleCollectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#timeouts FirewallApplicationRuleCollection#timeouts}

---

### FirewallApplicationRuleCollectionRule <a name="FirewallApplicationRuleCollectionRule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRule {
    string Name,
    string Description = null,
    string[] FqdnTags = null,
    object Protocol = null,
    string[] SourceAddresses = null,
    string[] SourceIpGroups = null,
    string[] TargetFqdns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#description FirewallApplicationRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.fqdnTags">FqdnTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#fqdn_tags FirewallApplicationRuleCollection#fqdn_tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.protocol">Protocol</a></code> | <code>object</code> | protocol block. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#source_addresses FirewallApplicationRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#source_ip_groups FirewallApplicationRuleCollection#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.targetFqdns">TargetFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#target_fqdns FirewallApplicationRuleCollection#target_fqdns}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#description FirewallApplicationRuleCollection#description}.

---

##### `FqdnTags`<sup>Optional</sup> <a name="FqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.fqdnTags"></a>

```csharp
public string[] FqdnTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#fqdn_tags FirewallApplicationRuleCollection#fqdn_tags}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.protocol"></a>

```csharp
public object Protocol { get; set; }
```

- *Type:* object

protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#protocol FirewallApplicationRuleCollection#protocol}

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#source_addresses FirewallApplicationRuleCollection#source_addresses}.

---

##### `SourceIpGroups`<sup>Optional</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#source_ip_groups FirewallApplicationRuleCollection#source_ip_groups}.

---

##### `TargetFqdns`<sup>Optional</sup> <a name="TargetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.targetFqdns"></a>

```csharp
public string[] TargetFqdns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#target_fqdns FirewallApplicationRuleCollection#target_fqdns}.

---

### FirewallApplicationRuleCollectionRuleProtocol <a name="FirewallApplicationRuleCollectionRuleProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRuleProtocol {
    double Port,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#port FirewallApplicationRuleCollection#port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#type FirewallApplicationRuleCollection#type}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#port FirewallApplicationRuleCollection#port}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#type FirewallApplicationRuleCollection#type}.

---

### FirewallApplicationRuleCollectionTimeouts <a name="FirewallApplicationRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#create FirewallApplicationRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#delete FirewallApplicationRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#read FirewallApplicationRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#update FirewallApplicationRuleCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#create FirewallApplicationRuleCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#delete FirewallApplicationRuleCollection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#read FirewallApplicationRuleCollection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/firewall_application_rule_collection#update FirewallApplicationRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallApplicationRuleCollectionRuleList <a name="FirewallApplicationRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get"></a>

```csharp
private FirewallApplicationRuleCollectionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallApplicationRuleCollectionRuleOutputReference <a name="FirewallApplicationRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol">PutProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetFqdnTags">ResetFqdnTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups">ResetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetTargetFqdns">ResetTargetFqdns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtocol` <a name="PutProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol"></a>

```csharp
private void PutProtocol(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFqdnTags` <a name="ResetFqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetFqdnTags"></a>

```csharp
private void ResetFqdnTags()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```csharp
private void ResetSourceAddresses()
```

##### `ResetSourceIpGroups` <a name="ResetSourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```csharp
private void ResetSourceIpGroups()
```

##### `ResetTargetFqdns` <a name="ResetTargetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetTargetFqdns"></a>

```csharp
private void ResetTargetFqdns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocol">Protocol</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList">FirewallApplicationRuleCollectionRuleProtocolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTagsInput">FqdnTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">SourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdnsInput">TargetFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTags">FqdnTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdns">TargetFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocol"></a>

```csharp
public FirewallApplicationRuleCollectionRuleProtocolList Protocol { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList">FirewallApplicationRuleCollectionRuleProtocolList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FqdnTagsInput`<sup>Optional</sup> <a name="FqdnTagsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTagsInput"></a>

```csharp
public string[] FqdnTagsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocolInput"></a>

```csharp
public object ProtocolInput { get; }
```

- *Type:* object

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```csharp
public string[] SourceAddressesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpGroupsInput`<sup>Optional</sup> <a name="SourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```csharp
public string[] SourceIpGroupsInput { get; }
```

- *Type:* string[]

---

##### `TargetFqdnsInput`<sup>Optional</sup> <a name="TargetFqdnsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdnsInput"></a>

```csharp
public string[] TargetFqdnsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FqdnTags`<sup>Required</sup> <a name="FqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTags"></a>

```csharp
public string[] FqdnTags { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourceIpGroups`<sup>Required</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; }
```

- *Type:* string[]

---

##### `TargetFqdns`<sup>Required</sup> <a name="TargetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdns"></a>

```csharp
public string[] TargetFqdns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallApplicationRuleCollectionRuleProtocolList <a name="FirewallApplicationRuleCollectionRuleProtocolList" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRuleProtocolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get"></a>

```csharp
private FirewallApplicationRuleCollectionRuleProtocolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallApplicationRuleCollectionRuleProtocolOutputReference <a name="FirewallApplicationRuleCollectionRuleProtocolOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionRuleProtocolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallApplicationRuleCollectionTimeoutsOutputReference <a name="FirewallApplicationRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallApplicationRuleCollectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



