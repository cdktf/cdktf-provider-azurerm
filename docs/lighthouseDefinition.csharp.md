# `lighthouseDefinition` Submodule <a name="`lighthouseDefinition` Submodule" id="@cdktf/provider-azurerm.lighthouseDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LighthouseDefinition <a name="LighthouseDefinition" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition azurerm_lighthouse_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinition(Construct Scope, string Id, LighthouseDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig">LighthouseDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig">LighthouseDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization">PutEligibleAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization">ResetEligibleAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId">ResetLighthouseDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization"></a>

```csharp
private void PutAuthorization(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization.parameter.value"></a>

- *Type:* object

---

##### `PutEligibleAuthorization` <a name="PutEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization"></a>

```csharp
private void PutEligibleAuthorization(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization.parameter.value"></a>

- *Type:* object

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan"></a>

```csharp
private void PutPlan(LighthouseDefinitionPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(LighthouseDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEligibleAuthorization` <a name="ResetEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization"></a>

```csharp
private void ResetEligibleAuthorization()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLighthouseDefinitionId` <a name="ResetLighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId"></a>

```csharp
private void ResetLighthouseDefinitionId()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LighthouseDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LighthouseDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LighthouseDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LighthouseDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LighthouseDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LighthouseDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LighthouseDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization">EligibleAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput">AuthorizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput">EligibleAuthorizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput">LighthouseDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput">ManagingTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId">LighthouseDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId">ManagingTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization"></a>

```csharp
public LighthouseDefinitionAuthorizationList Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a>

---

##### `EligibleAuthorization`<sup>Required</sup> <a name="EligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationList EligibleAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan"></a>

```csharp
public LighthouseDefinitionPlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts"></a>

```csharp
public LighthouseDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput"></a>

```csharp
public object AuthorizationInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EligibleAuthorizationInput`<sup>Optional</sup> <a name="EligibleAuthorizationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput"></a>

```csharp
public object EligibleAuthorizationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LighthouseDefinitionIdInput`<sup>Optional</sup> <a name="LighthouseDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput"></a>

```csharp
public string LighthouseDefinitionIdInput { get; }
```

- *Type:* string

---

##### `ManagingTenantIdInput`<sup>Optional</sup> <a name="ManagingTenantIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput"></a>

```csharp
public string ManagingTenantIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput"></a>

```csharp
public LighthouseDefinitionPlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LighthouseDefinitionId`<sup>Required</sup> <a name="LighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId"></a>

```csharp
public string LighthouseDefinitionId { get; }
```

- *Type:* string

---

##### `ManagingTenantId`<sup>Required</sup> <a name="ManagingTenantId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId"></a>

```csharp
public string ManagingTenantId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LighthouseDefinitionAuthorization <a name="LighthouseDefinitionAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionAuthorization {
    string PrincipalId,
    string RoleDefinitionId,
    string[] DelegatedRoleDefinitionIds = null,
    string PrincipalDisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds">DelegatedRoleDefinitionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `DelegatedRoleDefinitionIds`<sup>Optional</sup> <a name="DelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds"></a>

```csharp
public string[] DelegatedRoleDefinitionIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}.

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionConfig <a name="LighthouseDefinitionConfig" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Authorization,
    string ManagingTenantId,
    string Name,
    string Scope,
    string Description = null,
    object EligibleAuthorization = null,
    string Id = null,
    string LighthouseDefinitionId = null,
    LighthouseDefinitionPlan Plan = null,
    LighthouseDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization">Authorization</a></code> | <code>object</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId">ManagingTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization">EligibleAuthorization</a></code> | <code>object</code> | eligible_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId">LighthouseDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization"></a>

```csharp
public object Authorization { get; set; }
```

- *Type:* object

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#authorization LighthouseDefinition#authorization}

---

##### `ManagingTenantId`<sup>Required</sup> <a name="ManagingTenantId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId"></a>

```csharp
public string ManagingTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}.

---

##### `EligibleAuthorization`<sup>Optional</sup> <a name="EligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization"></a>

```csharp
public object EligibleAuthorization { get; set; }
```

- *Type:* object

eligible_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#eligible_authorization LighthouseDefinition#eligible_authorization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LighthouseDefinitionId`<sup>Optional</sup> <a name="LighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId"></a>

```csharp
public string LighthouseDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan"></a>

```csharp
public LighthouseDefinitionPlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#plan LighthouseDefinition#plan}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts"></a>

```csharp
public LighthouseDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#timeouts LighthouseDefinition#timeouts}

---

### LighthouseDefinitionEligibleAuthorization <a name="LighthouseDefinitionEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorization {
    string PrincipalId,
    string RoleDefinitionId,
    LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy JustInTimeAccessPolicy = null,
    string PrincipalDisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy">JustInTimeAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | just_in_time_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `JustInTimeAccessPolicy`<sup>Optional</sup> <a name="JustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy JustInTimeAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

just_in_time_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#just_in_time_access_policy LighthouseDefinition#just_in_time_access_policy}

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy {
    object Approver = null,
    string MaximumActivationDuration = null,
    string MultiFactorAuthProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver">Approver</a></code> | <code>object</code> | approver block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration">MaximumActivationDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider">MultiFactorAuthProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}. |

---

##### `Approver`<sup>Optional</sup> <a name="Approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver"></a>

```csharp
public object Approver { get; set; }
```

- *Type:* object

approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#approver LighthouseDefinition#approver}

---

##### `MaximumActivationDuration`<sup>Optional</sup> <a name="MaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration"></a>

```csharp
public string MaximumActivationDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}.

---

##### `MultiFactorAuthProvider`<sup>Optional</sup> <a name="MultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider"></a>

```csharp
public string MultiFactorAuthProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover {
    string PrincipalId,
    string PrincipalDisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionPlan <a name="LighthouseDefinitionPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionPlan {
    string Name,
    string Product,
    string Publisher,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}.

---

### LighthouseDefinitionTimeouts <a name="LighthouseDefinitionTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LighthouseDefinitionAuthorizationList <a name="LighthouseDefinitionAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionAuthorizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get"></a>

```csharp
private LighthouseDefinitionAuthorizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionAuthorizationOutputReference <a name="LighthouseDefinitionAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds">ResetDelegatedRoleDefinitionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelegatedRoleDefinitionIds` <a name="ResetDelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds"></a>

```csharp
private void ResetDelegatedRoleDefinitionIds()
```

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```csharp
private void ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput">DelegatedRoleDefinitionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds">DelegatedRoleDefinitionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelegatedRoleDefinitionIdsInput`<sup>Optional</sup> <a name="DelegatedRoleDefinitionIdsInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput"></a>

```csharp
public string[] DelegatedRoleDefinitionIdsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```csharp
public string PrincipalDisplayNameInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `DelegatedRoleDefinitionIds`<sup>Required</sup> <a name="DelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds"></a>

```csharp
public string[] DelegatedRoleDefinitionIds { get; }
```

- *Type:* string[]

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get"></a>

```csharp
private LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName"></a>

```csharp
private void ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput"></a>

```csharp
public string PrincipalDisplayNameInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover">PutApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover">ResetApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration">ResetMaximumActivationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider">ResetMultiFactorAuthProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprover` <a name="PutApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover"></a>

```csharp
private void PutApprover(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover.parameter.value"></a>

- *Type:* object

---

##### `ResetApprover` <a name="ResetApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover"></a>

```csharp
private void ResetApprover()
```

##### `ResetMaximumActivationDuration` <a name="ResetMaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration"></a>

```csharp
private void ResetMaximumActivationDuration()
```

##### `ResetMultiFactorAuthProvider` <a name="ResetMultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider"></a>

```csharp
private void ResetMultiFactorAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver">Approver</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput">ApproverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput">MaximumActivationDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput">MultiFactorAuthProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration">MaximumActivationDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider">MultiFactorAuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Approver`<sup>Required</sup> <a name="Approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList Approver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a>

---

##### `ApproverInput`<sup>Optional</sup> <a name="ApproverInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput"></a>

```csharp
public object ApproverInput { get; }
```

- *Type:* object

---

##### `MaximumActivationDurationInput`<sup>Optional</sup> <a name="MaximumActivationDurationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput"></a>

```csharp
public string MaximumActivationDurationInput { get; }
```

- *Type:* string

---

##### `MultiFactorAuthProviderInput`<sup>Optional</sup> <a name="MultiFactorAuthProviderInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput"></a>

```csharp
public string MultiFactorAuthProviderInput { get; }
```

- *Type:* string

---

##### `MaximumActivationDuration`<sup>Required</sup> <a name="MaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration"></a>

```csharp
public string MaximumActivationDuration { get; }
```

- *Type:* string

---

##### `MultiFactorAuthProvider`<sup>Required</sup> <a name="MultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider"></a>

```csharp
public string MultiFactorAuthProvider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---


### LighthouseDefinitionEligibleAuthorizationList <a name="LighthouseDefinitionEligibleAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get"></a>

```csharp
private LighthouseDefinitionEligibleAuthorizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionEligibleAuthorizationOutputReference <a name="LighthouseDefinitionEligibleAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionEligibleAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy">PutJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy">ResetJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJustInTimeAccessPolicy` <a name="PutJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy"></a>

```csharp
private void PutJustInTimeAccessPolicy(LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---

##### `ResetJustInTimeAccessPolicy` <a name="ResetJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy"></a>

```csharp
private void ResetJustInTimeAccessPolicy()
```

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```csharp
private void ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy">JustInTimeAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput">JustInTimeAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JustInTimeAccessPolicy`<sup>Required</sup> <a name="JustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference JustInTimeAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a>

---

##### `JustInTimeAccessPolicyInput`<sup>Optional</sup> <a name="JustInTimeAccessPolicyInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput"></a>

```csharp
public LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy JustInTimeAccessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```csharp
public string PrincipalDisplayNameInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName"></a>

```csharp
public string PrincipalDisplayName { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LighthouseDefinitionPlanOutputReference <a name="LighthouseDefinitionPlanOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue"></a>

```csharp
public LighthouseDefinitionPlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---


### LighthouseDefinitionTimeoutsOutputReference <a name="LighthouseDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LighthouseDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



