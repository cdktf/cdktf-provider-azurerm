# `frontdoorRulesEngine` Submodule <a name="`frontdoorRulesEngine` Submodule" id="@cdktf/provider-azurerm.frontdoorRulesEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorRulesEngine <a name="FrontdoorRulesEngine" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine azurerm_frontdoor_rules_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngine(Construct Scope, string Id, FrontdoorRulesEngineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts"></a>

```csharp
private void PutTimeouts(FrontdoorRulesEngineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FrontdoorRulesEngine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FrontdoorRulesEngine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FrontdoorRulesEngine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FrontdoorRulesEngine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FrontdoorRulesEngine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FrontdoorRulesEngine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrontdoorRulesEngine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrontdoorRulesEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FrontdoorRulesEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput">FrontdoorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName">FrontdoorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule"></a>

```csharp
public FrontdoorRulesEngineRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts"></a>

```csharp
public FrontdoorRulesEngineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FrontdoorNameInput`<sup>Optional</sup> <a name="FrontdoorNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput"></a>

```csharp
public string FrontdoorNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FrontdoorName`<sup>Required</sup> <a name="FrontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName"></a>

```csharp
public string FrontdoorName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorRulesEngineConfig <a name="FrontdoorRulesEngineConfig" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FrontdoorName,
    string Name,
    string ResourceGroupName,
    object Enabled = null,
    string Id = null,
    object Rule = null,
    FrontdoorRulesEngineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName">FrontdoorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FrontdoorName`<sup>Required</sup> <a name="FrontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName"></a>

```csharp
public string FrontdoorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts"></a>

```csharp
public FrontdoorRulesEngineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}

---

### FrontdoorRulesEngineRule <a name="FrontdoorRulesEngineRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRule {
    string Name,
    double Priority,
    FrontdoorRulesEngineRuleAction Action = null,
    object MatchCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition">MatchCondition</a></code> | <code>object</code> | match_condition block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action"></a>

```csharp
public FrontdoorRulesEngineRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#action FrontdoorRulesEngine#action}

---

##### `MatchCondition`<sup>Optional</sup> <a name="MatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition"></a>

```csharp
public object MatchCondition { get; set; }
```

- *Type:* object

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#match_condition FrontdoorRulesEngine#match_condition}

---

### FrontdoorRulesEngineRuleAction <a name="FrontdoorRulesEngineRuleAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleAction {
    object RequestHeader = null,
    object ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader">RequestHeader</a></code> | <code>object</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader">ResponseHeader</a></code> | <code>object</code> | response_header block. |

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader"></a>

```csharp
public object RequestHeader { get; set; }
```

- *Type:* object

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader"></a>

```csharp
public object ResponseHeader { get; set; }
```

- *Type:* object

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}

---

### FrontdoorRulesEngineRuleActionRequestHeader <a name="FrontdoorRulesEngineRuleActionRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionRequestHeader {
    string HeaderActionType = null,
    string HeaderName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType">HeaderActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `HeaderActionType`<sup>Optional</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType"></a>

```csharp
public string HeaderActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleActionResponseHeader <a name="FrontdoorRulesEngineRuleActionResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionResponseHeader {
    string HeaderActionType = null,
    string HeaderName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType">HeaderActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `HeaderActionType`<sup>Optional</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType"></a>

```csharp
public string HeaderActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleMatchCondition <a name="FrontdoorRulesEngineRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleMatchCondition {
    string Operator,
    object NegateCondition = null,
    string Selector = null,
    string[] Transform = null,
    string[] Value = null,
    string Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition">NegateCondition</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector">Selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform">Transform</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value">Value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable">Variable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition"></a>

```csharp
public object NegateCondition { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}.

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform"></a>

```csharp
public string[] Transform { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}.

---

### FrontdoorRulesEngineTimeouts <a name="FrontdoorRulesEngineTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorRulesEngineRuleActionOutputReference <a name="FrontdoorRulesEngineRuleActionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader"></a>

```csharp
private void PutRequestHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* object

---

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader"></a>

```csharp
private void PutResponseHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader"></a>

```csharp
private void ResetRequestHeader()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader"></a>

```csharp
public FrontdoorRulesEngineRuleActionRequestHeaderList RequestHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a>

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader"></a>

```csharp
public FrontdoorRulesEngineRuleActionResponseHeaderList ResponseHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a>

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput"></a>

```csharp
public object RequestHeaderInput { get; }
```

- *Type:* object

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput"></a>

```csharp
public object ResponseHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue"></a>

```csharp
public FrontdoorRulesEngineRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---


### FrontdoorRulesEngineRuleActionRequestHeaderList <a name="FrontdoorRulesEngineRuleActionRequestHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get"></a>

```csharp
private FrontdoorRulesEngineRuleActionRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleActionRequestHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionRequestHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType">ResetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderActionType` <a name="ResetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType"></a>

```csharp
private void ResetHeaderActionType()
```

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName"></a>

```csharp
private void ResetHeaderName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput">HeaderActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType">HeaderActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderActionTypeInput`<sup>Optional</sup> <a name="HeaderActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput"></a>

```csharp
public string HeaderActionTypeInput { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `HeaderActionType`<sup>Required</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType"></a>

```csharp
public string HeaderActionType { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleActionResponseHeaderList <a name="FrontdoorRulesEngineRuleActionResponseHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionResponseHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get"></a>

```csharp
private FrontdoorRulesEngineRuleActionResponseHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleActionResponseHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionResponseHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleActionResponseHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType">ResetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderActionType` <a name="ResetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType"></a>

```csharp
private void ResetHeaderActionType()
```

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName"></a>

```csharp
private void ResetHeaderName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput">HeaderActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType">HeaderActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderActionTypeInput`<sup>Optional</sup> <a name="HeaderActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput"></a>

```csharp
public string HeaderActionTypeInput { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `HeaderActionType`<sup>Required</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType"></a>

```csharp
public string HeaderActionType { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleList <a name="FrontdoorRulesEngineRuleList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get"></a>

```csharp
private FrontdoorRulesEngineRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleMatchConditionList <a name="FrontdoorRulesEngineRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleMatchConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get"></a>

```csharp
private FrontdoorRulesEngineRuleMatchConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleMatchConditionOutputReference <a name="FrontdoorRulesEngineRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleMatchConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition"></a>

```csharp
private void ResetNegateCondition()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform"></a>

```csharp
private void ResetTransform()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput">TransformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform">Transform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput"></a>

```csharp
public object NegateConditionInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput"></a>

```csharp
public string[] TransformInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition"></a>

```csharp
public object NegateCondition { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform"></a>

```csharp
public string[] Transform { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineRuleOutputReference <a name="FrontdoorRulesEngineRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition">ResetMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction"></a>

```csharp
private void PutAction(FrontdoorRulesEngineRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition"></a>

```csharp
private void PutMatchCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetMatchCondition` <a name="ResetMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition"></a>

```csharp
private void ResetMatchCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action"></a>

```csharp
public FrontdoorRulesEngineRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition"></a>

```csharp
public FrontdoorRulesEngineRuleMatchConditionList MatchCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput"></a>

```csharp
public FrontdoorRulesEngineRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput"></a>

```csharp
public object MatchConditionInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRulesEngineTimeoutsOutputReference <a name="FrontdoorRulesEngineTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRulesEngineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



