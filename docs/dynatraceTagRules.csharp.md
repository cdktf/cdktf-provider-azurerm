# `dynatraceTagRules` Submodule <a name="`dynatraceTagRules` Submodule" id="@cdktf/provider-azurerm.dynatraceTagRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceTagRules <a name="DynatraceTagRules" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRules(Construct Scope, string Id, DynatraceTagRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule">PutLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule">PutMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule">ResetLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule">ResetMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogRule` <a name="PutLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule"></a>

```csharp
private void PutLogRule(DynatraceTagRulesLogRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `PutMetricRule` <a name="PutMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule"></a>

```csharp
private void PutMetricRule(DynatraceTagRulesMetricRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts"></a>

```csharp
private void PutTimeouts(DynatraceTagRulesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogRule` <a name="ResetLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule"></a>

```csharp
private void ResetLogRule()
```

##### `ResetMetricRule` <a name="ResetMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule"></a>

```csharp
private void ResetMetricRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceTagRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceTagRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceTagRules.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceTagRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynatraceTagRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynatraceTagRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceTagRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule">LogRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule">MetricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput">LogRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput">MetricRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput">MonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId">MonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `LogRule`<sup>Required</sup> <a name="LogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule"></a>

```csharp
public DynatraceTagRulesLogRuleOutputReference LogRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a>

---

##### `MetricRule`<sup>Required</sup> <a name="MetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule"></a>

```csharp
public DynatraceTagRulesMetricRuleOutputReference MetricRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts"></a>

```csharp
public DynatraceTagRulesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogRuleInput`<sup>Optional</sup> <a name="LogRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput"></a>

```csharp
public DynatraceTagRulesLogRule LogRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `MetricRuleInput`<sup>Optional</sup> <a name="MetricRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput"></a>

```csharp
public DynatraceTagRulesMetricRule MetricRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput"></a>

```csharp
public string MonitorIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput"></a>

```csharp
public IResolvable|DynatraceTagRulesTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId"></a>

```csharp
public string MonitorId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceTagRulesConfig <a name="DynatraceTagRulesConfig" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorId,
    string Name,
    string Id = null,
    DynatraceTagRulesLogRule LogRule = null,
    DynatraceTagRulesMetricRule MetricRule = null,
    DynatraceTagRulesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId">MonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule">LogRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | log_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule">MetricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | metric_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId"></a>

```csharp
public string MonitorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogRule`<sup>Optional</sup> <a name="LogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule"></a>

```csharp
public DynatraceTagRulesLogRule LogRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

log_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}

---

##### `MetricRule`<sup>Optional</sup> <a name="MetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule"></a>

```csharp
public DynatraceTagRulesMetricRule MetricRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

metric_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts"></a>

```csharp
public DynatraceTagRulesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}

---

### DynatraceTagRulesLogRule <a name="DynatraceTagRulesLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesLogRule {
    IResolvable|DynatraceTagRulesLogRuleFilteringTag[] FilteringTag,
    bool|IResolvable SendActivityLogsEnabled = null,
    bool|IResolvable SendAzureActiveDirectoryLogsEnabled = null,
    bool|IResolvable SendSubscriptionLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag">FilteringTag</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled">SendActivityLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled">SendAzureActiveDirectoryLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled">SendSubscriptionLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}. |

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag"></a>

```csharp
public IResolvable|DynatraceTagRulesLogRuleFilteringTag[] FilteringTag { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `SendActivityLogsEnabled`<sup>Optional</sup> <a name="SendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled"></a>

```csharp
public bool|IResolvable SendActivityLogsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}.

---

##### `SendAzureActiveDirectoryLogsEnabled`<sup>Optional</sup> <a name="SendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled"></a>

```csharp
public bool|IResolvable SendAzureActiveDirectoryLogsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}.

---

##### `SendSubscriptionLogsEnabled`<sup>Optional</sup> <a name="SendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled"></a>

```csharp
public bool|IResolvable SendSubscriptionLogsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}.

---

### DynatraceTagRulesLogRuleFilteringTag <a name="DynatraceTagRulesLogRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesLogRuleFilteringTag {
    string Action,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesMetricRule <a name="DynatraceTagRulesMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesMetricRule {
    IResolvable|DynatraceTagRulesMetricRuleFilteringTag[] FilteringTag,
    bool|IResolvable SendingMetricsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag">FilteringTag</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.sendingMetricsEnabled">SendingMetricsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#sending_metrics_enabled DynatraceTagRules#sending_metrics_enabled}. |

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag"></a>

```csharp
public IResolvable|DynatraceTagRulesMetricRuleFilteringTag[] FilteringTag { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `SendingMetricsEnabled`<sup>Optional</sup> <a name="SendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.sendingMetricsEnabled"></a>

```csharp
public bool|IResolvable SendingMetricsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#sending_metrics_enabled DynatraceTagRules#sending_metrics_enabled}.

---

### DynatraceTagRulesMetricRuleFilteringTag <a name="DynatraceTagRulesMetricRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesMetricRuleFilteringTag {
    string Action,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesTimeouts <a name="DynatraceTagRulesTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceTagRulesLogRuleFilteringTagList <a name="DynatraceTagRulesLogRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesLogRuleFilteringTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get"></a>

```csharp
private DynatraceTagRulesLogRuleFilteringTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue"></a>

```csharp
public IResolvable|DynatraceTagRulesLogRuleFilteringTag[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---


### DynatraceTagRulesLogRuleFilteringTagOutputReference <a name="DynatraceTagRulesLogRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesLogRuleFilteringTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynatraceTagRulesLogRuleFilteringTag InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>

---


### DynatraceTagRulesLogRuleOutputReference <a name="DynatraceTagRulesLogRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesLogRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag">PutFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled">ResetSendActivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled">ResetSendAzureActiveDirectoryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled">ResetSendSubscriptionLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilteringTag` <a name="PutFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag"></a>

```csharp
private void PutFilteringTag(IResolvable|DynatraceTagRulesLogRuleFilteringTag[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---

##### `ResetSendActivityLogsEnabled` <a name="ResetSendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled"></a>

```csharp
private void ResetSendActivityLogsEnabled()
```

##### `ResetSendAzureActiveDirectoryLogsEnabled` <a name="ResetSendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled"></a>

```csharp
private void ResetSendAzureActiveDirectoryLogsEnabled()
```

##### `ResetSendSubscriptionLogsEnabled` <a name="ResetSendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled"></a>

```csharp
private void ResetSendSubscriptionLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput">FilteringTagInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput">SendActivityLogsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput">SendAzureActiveDirectoryLogsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput">SendSubscriptionLogsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled">SendActivityLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled">SendAzureActiveDirectoryLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled">SendSubscriptionLogsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag"></a>

```csharp
public DynatraceTagRulesLogRuleFilteringTagList FilteringTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a>

---

##### `FilteringTagInput`<sup>Optional</sup> <a name="FilteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput"></a>

```csharp
public IResolvable|DynatraceTagRulesLogRuleFilteringTag[] FilteringTagInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---

##### `SendActivityLogsEnabledInput`<sup>Optional</sup> <a name="SendActivityLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput"></a>

```csharp
public bool|IResolvable SendActivityLogsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendAzureActiveDirectoryLogsEnabledInput`<sup>Optional</sup> <a name="SendAzureActiveDirectoryLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput"></a>

```csharp
public bool|IResolvable SendAzureActiveDirectoryLogsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendSubscriptionLogsEnabledInput`<sup>Optional</sup> <a name="SendSubscriptionLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput"></a>

```csharp
public bool|IResolvable SendSubscriptionLogsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendActivityLogsEnabled`<sup>Required</sup> <a name="SendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled"></a>

```csharp
public bool|IResolvable SendActivityLogsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendAzureActiveDirectoryLogsEnabled`<sup>Required</sup> <a name="SendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled"></a>

```csharp
public bool|IResolvable SendAzureActiveDirectoryLogsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendSubscriptionLogsEnabled`<sup>Required</sup> <a name="SendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled"></a>

```csharp
public bool|IResolvable SendSubscriptionLogsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue"></a>

```csharp
public DynatraceTagRulesLogRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---


### DynatraceTagRulesMetricRuleFilteringTagList <a name="DynatraceTagRulesMetricRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesMetricRuleFilteringTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get"></a>

```csharp
private DynatraceTagRulesMetricRuleFilteringTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue"></a>

```csharp
public IResolvable|DynatraceTagRulesMetricRuleFilteringTag[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---


### DynatraceTagRulesMetricRuleFilteringTagOutputReference <a name="DynatraceTagRulesMetricRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesMetricRuleFilteringTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynatraceTagRulesMetricRuleFilteringTag InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>

---


### DynatraceTagRulesMetricRuleOutputReference <a name="DynatraceTagRulesMetricRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesMetricRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag">PutFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resetSendingMetricsEnabled">ResetSendingMetricsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilteringTag` <a name="PutFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag"></a>

```csharp
private void PutFilteringTag(IResolvable|DynatraceTagRulesMetricRuleFilteringTag[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---

##### `ResetSendingMetricsEnabled` <a name="ResetSendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resetSendingMetricsEnabled"></a>

```csharp
private void ResetSendingMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput">FilteringTagInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabledInput">SendingMetricsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabled">SendingMetricsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag"></a>

```csharp
public DynatraceTagRulesMetricRuleFilteringTagList FilteringTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a>

---

##### `FilteringTagInput`<sup>Optional</sup> <a name="FilteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput"></a>

```csharp
public IResolvable|DynatraceTagRulesMetricRuleFilteringTag[] FilteringTagInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---

##### `SendingMetricsEnabledInput`<sup>Optional</sup> <a name="SendingMetricsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabledInput"></a>

```csharp
public bool|IResolvable SendingMetricsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SendingMetricsEnabled`<sup>Required</sup> <a name="SendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabled"></a>

```csharp
public bool|IResolvable SendingMetricsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue"></a>

```csharp
public DynatraceTagRulesMetricRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---


### DynatraceTagRulesTimeoutsOutputReference <a name="DynatraceTagRulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceTagRulesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynatraceTagRulesTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---



