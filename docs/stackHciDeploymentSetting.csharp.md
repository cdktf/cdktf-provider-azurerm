# `stackHciDeploymentSetting` Submodule <a name="`stackHciDeploymentSetting` Submodule" id="@cdktf/provider-azurerm.stackHciDeploymentSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciDeploymentSetting <a name="StackHciDeploymentSetting" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting azurerm_stack_hci_deployment_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSetting(Construct Scope, string Id, StackHciDeploymentSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig">StackHciDeploymentSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig">StackHciDeploymentSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit">PutScaleUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScaleUnit` <a name="PutScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit"></a>

```csharp
private void PutScaleUnit(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(StackHciDeploymentSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciDeploymentSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciDeploymentSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciDeploymentSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciDeploymentSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciDeploymentSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciDeploymentSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackHciDeploymentSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit">ScaleUnit</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput">ArcResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput">ScaleUnitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput">StackHciClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds">ArcResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId">StackHciClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit"></a>

```csharp
public StackHciDeploymentSettingScaleUnitList ScaleUnit { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts"></a>

```csharp
public StackHciDeploymentSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a>

---

##### `ArcResourceIdsInput`<sup>Optional</sup> <a name="ArcResourceIdsInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput"></a>

```csharp
public string[] ArcResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScaleUnitInput`<sup>Optional</sup> <a name="ScaleUnitInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput"></a>

```csharp
public object ScaleUnitInput { get; }
```

- *Type:* object

---

##### `StackHciClusterIdInput`<sup>Optional</sup> <a name="StackHciClusterIdInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput"></a>

```csharp
public string StackHciClusterIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ArcResourceIds`<sup>Required</sup> <a name="ArcResourceIds" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds"></a>

```csharp
public string[] ArcResourceIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StackHciClusterId`<sup>Required</sup> <a name="StackHciClusterId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId"></a>

```csharp
public string StackHciClusterId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciDeploymentSettingConfig <a name="StackHciDeploymentSettingConfig" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ArcResourceIds,
    object ScaleUnit,
    string StackHciClusterId,
    string Version,
    string Id = null,
    StackHciDeploymentSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds">ArcResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit">ScaleUnit</a></code> | <code>object</code> | scale_unit block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId">StackHciClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArcResourceIds`<sup>Required</sup> <a name="ArcResourceIds" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds"></a>

```csharp
public string[] ArcResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}.

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit"></a>

```csharp
public object ScaleUnit { get; set; }
```

- *Type:* object

scale_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#scale_unit StackHciDeploymentSetting#scale_unit}

---

##### `StackHciClusterId`<sup>Required</sup> <a name="StackHciClusterId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId"></a>

```csharp
public string StackHciClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts"></a>

```csharp
public StackHciDeploymentSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#timeouts StackHciDeploymentSetting#timeouts}

---

### StackHciDeploymentSettingScaleUnit <a name="StackHciDeploymentSettingScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnit {
    string ActiveDirectoryOrganizationalUnitPath,
    StackHciDeploymentSettingScaleUnitCluster Cluster,
    string DomainFqdn,
    StackHciDeploymentSettingScaleUnitHostNetwork HostNetwork,
    object InfrastructureNetwork,
    string NamePrefix,
    StackHciDeploymentSettingScaleUnitOptionalService OptionalService,
    object PhysicalNode,
    string SecretsLocation,
    StackHciDeploymentSettingScaleUnitStorage Storage,
    object BitlockerBootVolumeEnabled = null,
    object BitlockerDataVolumeEnabled = null,
    object CredentialGuardEnabled = null,
    object DriftControlEnabled = null,
    object DrtmProtectionEnabled = null,
    object EpisodicDataUploadEnabled = null,
    object EuLocationEnabled = null,
    object HvciProtectionEnabled = null,
    object SideChannelMitigationEnabled = null,
    object SmbClusterEncryptionEnabled = null,
    object SmbSigningEnabled = null,
    object StreamingDataClientEnabled = null,
    object WdacEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath">ActiveDirectoryOrganizationalUnitPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | cluster block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn">DomainFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork">HostNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | host_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork">InfrastructureNetwork</a></code> | <code>object</code> | infrastructure_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService">OptionalService</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | optional_service block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode">PhysicalNode</a></code> | <code>object</code> | physical_node block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation">SecretsLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled">BitlockerBootVolumeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled">BitlockerDataVolumeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled">CredentialGuardEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled">DriftControlEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled">DrtmProtectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled">EpisodicDataUploadEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled">EuLocationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled">HvciProtectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled">SideChannelMitigationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled">SmbClusterEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled">SmbSigningEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled">StreamingDataClientEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled">WdacEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}. |

---

##### `ActiveDirectoryOrganizationalUnitPath`<sup>Required</sup> <a name="ActiveDirectoryOrganizationalUnitPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath"></a>

```csharp
public string ActiveDirectoryOrganizationalUnitPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}.

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster"></a>

```csharp
public StackHciDeploymentSettingScaleUnitCluster Cluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#cluster StackHciDeploymentSetting#cluster}

---

##### `DomainFqdn`<sup>Required</sup> <a name="DomainFqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn"></a>

```csharp
public string DomainFqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}.

---

##### `HostNetwork`<sup>Required</sup> <a name="HostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetwork HostNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

host_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#host_network StackHciDeploymentSetting#host_network}

---

##### `InfrastructureNetwork`<sup>Required</sup> <a name="InfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork"></a>

```csharp
public object InfrastructureNetwork { get; set; }
```

- *Type:* object

infrastructure_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#infrastructure_network StackHciDeploymentSetting#infrastructure_network}

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}.

---

##### `OptionalService`<sup>Required</sup> <a name="OptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService"></a>

```csharp
public StackHciDeploymentSettingScaleUnitOptionalService OptionalService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

optional_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#optional_service StackHciDeploymentSetting#optional_service}

---

##### `PhysicalNode`<sup>Required</sup> <a name="PhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode"></a>

```csharp
public object PhysicalNode { get; set; }
```

- *Type:* object

physical_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#physical_node StackHciDeploymentSetting#physical_node}

---

##### `SecretsLocation`<sup>Required</sup> <a name="SecretsLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation"></a>

```csharp
public string SecretsLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}.

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage"></a>

```csharp
public StackHciDeploymentSettingScaleUnitStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage StackHciDeploymentSetting#storage}

---

##### `BitlockerBootVolumeEnabled`<sup>Optional</sup> <a name="BitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled"></a>

```csharp
public object BitlockerBootVolumeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}.

---

##### `BitlockerDataVolumeEnabled`<sup>Optional</sup> <a name="BitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled"></a>

```csharp
public object BitlockerDataVolumeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}.

---

##### `CredentialGuardEnabled`<sup>Optional</sup> <a name="CredentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled"></a>

```csharp
public object CredentialGuardEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}.

---

##### `DriftControlEnabled`<sup>Optional</sup> <a name="DriftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled"></a>

```csharp
public object DriftControlEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}.

---

##### `DrtmProtectionEnabled`<sup>Optional</sup> <a name="DrtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled"></a>

```csharp
public object DrtmProtectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}.

---

##### `EpisodicDataUploadEnabled`<sup>Optional</sup> <a name="EpisodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled"></a>

```csharp
public object EpisodicDataUploadEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}.

---

##### `EuLocationEnabled`<sup>Optional</sup> <a name="EuLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled"></a>

```csharp
public object EuLocationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}.

---

##### `HvciProtectionEnabled`<sup>Optional</sup> <a name="HvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled"></a>

```csharp
public object HvciProtectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}.

---

##### `SideChannelMitigationEnabled`<sup>Optional</sup> <a name="SideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled"></a>

```csharp
public object SideChannelMitigationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}.

---

##### `SmbClusterEncryptionEnabled`<sup>Optional</sup> <a name="SmbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled"></a>

```csharp
public object SmbClusterEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}.

---

##### `SmbSigningEnabled`<sup>Optional</sup> <a name="SmbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled"></a>

```csharp
public object SmbSigningEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}.

---

##### `StreamingDataClientEnabled`<sup>Optional</sup> <a name="StreamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled"></a>

```csharp
public object StreamingDataClientEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}.

---

##### `WdacEnabled`<sup>Optional</sup> <a name="WdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled"></a>

```csharp
public object WdacEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}.

---

### StackHciDeploymentSettingScaleUnitCluster <a name="StackHciDeploymentSettingScaleUnitCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitCluster {
    string AzureServiceEndpoint,
    string CloudAccountName,
    string Name,
    string WitnessPath,
    string WitnessType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint">AzureServiceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath">WitnessPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType">WitnessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}. |

---

##### `AzureServiceEndpoint`<sup>Required</sup> <a name="AzureServiceEndpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint"></a>

```csharp
public string AzureServiceEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}.

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `WitnessPath`<sup>Required</sup> <a name="WitnessPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath"></a>

```csharp
public string WitnessPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}.

---

##### `WitnessType`<sup>Required</sup> <a name="WitnessType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType"></a>

```csharp
public string WitnessType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}.

---

### StackHciDeploymentSettingScaleUnitHostNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetwork {
    object Intent,
    object StorageNetwork,
    object StorageAutoIpEnabled = null,
    object StorageConnectivitySwitchlessEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent">Intent</a></code> | <code>object</code> | intent block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork">StorageNetwork</a></code> | <code>object</code> | storage_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled">StorageAutoIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled">StorageConnectivitySwitchlessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}. |

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent"></a>

```csharp
public object Intent { get; set; }
```

- *Type:* object

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#intent StackHciDeploymentSetting#intent}

---

##### `StorageNetwork`<sup>Required</sup> <a name="StorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork"></a>

```csharp
public object StorageNetwork { get; set; }
```

- *Type:* object

storage_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage_network StackHciDeploymentSetting#storage_network}

---

##### `StorageAutoIpEnabled`<sup>Optional</sup> <a name="StorageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled"></a>

```csharp
public object StorageAutoIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}.

---

##### `StorageConnectivitySwitchlessEnabled`<sup>Optional</sup> <a name="StorageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled"></a>

```csharp
public object StorageConnectivitySwitchlessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntent <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntent {
    string[] Adapter,
    string Name,
    string[] TrafficType,
    StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride AdapterPropertyOverride = null,
    object AdapterPropertyOverrideEnabled = null,
    StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride QosPolicyOverride = null,
    object QosPolicyOverrideEnabled = null,
    StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride VirtualSwitchConfigurationOverride = null,
    object VirtualSwitchConfigurationOverrideEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter">Adapter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType">TrafficType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride">AdapterPropertyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | adapter_property_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled">AdapterPropertyOverrideEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride">QosPolicyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | qos_policy_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled">QosPolicyOverrideEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride">VirtualSwitchConfigurationOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | virtual_switch_configuration_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled">VirtualSwitchConfigurationOverrideEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}. |

---

##### `Adapter`<sup>Required</sup> <a name="Adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter"></a>

```csharp
public string[] Adapter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType"></a>

```csharp
public string[] TrafficType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}.

---

##### `AdapterPropertyOverride`<sup>Optional</sup> <a name="AdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride AdapterPropertyOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

adapter_property_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#adapter_property_override StackHciDeploymentSetting#adapter_property_override}

---

##### `AdapterPropertyOverrideEnabled`<sup>Optional</sup> <a name="AdapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled"></a>

```csharp
public object AdapterPropertyOverrideEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}.

---

##### `QosPolicyOverride`<sup>Optional</sup> <a name="QosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride QosPolicyOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

qos_policy_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#qos_policy_override StackHciDeploymentSetting#qos_policy_override}

---

##### `QosPolicyOverrideEnabled`<sup>Optional</sup> <a name="QosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled"></a>

```csharp
public object QosPolicyOverrideEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}.

---

##### `VirtualSwitchConfigurationOverride`<sup>Optional</sup> <a name="VirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride VirtualSwitchConfigurationOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

virtual_switch_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override StackHciDeploymentSetting#virtual_switch_configuration_override}

---

##### `VirtualSwitchConfigurationOverrideEnabled`<sup>Optional</sup> <a name="VirtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled"></a>

```csharp
public object VirtualSwitchConfigurationOverrideEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride {
    string JumboPacket = null,
    string NetworkDirect = null,
    string NetworkDirectTechnology = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket">JumboPacket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect">NetworkDirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology">NetworkDirectTechnology</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}. |

---

##### `JumboPacket`<sup>Optional</sup> <a name="JumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket"></a>

```csharp
public string JumboPacket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}.

---

##### `NetworkDirect`<sup>Optional</sup> <a name="NetworkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect"></a>

```csharp
public string NetworkDirect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}.

---

##### `NetworkDirectTechnology`<sup>Optional</sup> <a name="NetworkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology"></a>

```csharp
public string NetworkDirectTechnology { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride {
    string BandwidthPercentageSmb = null,
    string PriorityValue8021ActionCluster = null,
    string PriorityValue8021ActionSmb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb">BandwidthPercentageSmb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster">PriorityValue8021ActionCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb">PriorityValue8021ActionSmb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}. |

---

##### `BandwidthPercentageSmb`<sup>Optional</sup> <a name="BandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb"></a>

```csharp
public string BandwidthPercentageSmb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}.

---

##### `PriorityValue8021ActionCluster`<sup>Optional</sup> <a name="PriorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster"></a>

```csharp
public string PriorityValue8021ActionCluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}.

---

##### `PriorityValue8021ActionSmb`<sup>Optional</sup> <a name="PriorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb"></a>

```csharp
public string PriorityValue8021ActionSmb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride {
    string EnableIov = null,
    string LoadBalancingAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov">EnableIov</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}. |

---

##### `EnableIov`<sup>Optional</sup> <a name="EnableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov"></a>

```csharp
public string EnableIov { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}.

---

##### `LoadBalancingAlgorithm`<sup>Optional</sup> <a name="LoadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork {
    string Name,
    string NetworkAdapterName,
    string VlanId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName">NetworkAdapterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `NetworkAdapterName`<sup>Required</sup> <a name="NetworkAdapterName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName"></a>

```csharp
public string NetworkAdapterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}.

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetwork <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetwork {
    string[] DnsServer,
    string Gateway,
    object IpPool,
    string SubnetMask,
    object DhcpEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway">Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool">IpPool</a></code> | <code>object</code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask">SubnetMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled">DhcpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}. |

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}.

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}.

---

##### `IpPool`<sup>Required</sup> <a name="IpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool"></a>

```csharp
public object IpPool { get; set; }
```

- *Type:* object

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#ip_pool StackHciDeploymentSetting#ip_pool}

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask"></a>

```csharp
public string SubnetMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}.

---

##### `DhcpEnabled`<sup>Optional</sup> <a name="DhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled"></a>

```csharp
public object DhcpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool {
    string EndingAddress,
    string StartingAddress
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress">EndingAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress">StartingAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}. |

---

##### `EndingAddress`<sup>Required</sup> <a name="EndingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress"></a>

```csharp
public string EndingAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}.

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress"></a>

```csharp
public string StartingAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}.

---

### StackHciDeploymentSettingScaleUnitOptionalService <a name="StackHciDeploymentSettingScaleUnitOptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitOptionalService {
    string CustomLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation">CustomLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}. |

---

##### `CustomLocation`<sup>Required</sup> <a name="CustomLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation"></a>

```csharp
public string CustomLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}.

---

### StackHciDeploymentSettingScaleUnitPhysicalNode <a name="StackHciDeploymentSettingScaleUnitPhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitPhysicalNode {
    string Ipv4Address,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

### StackHciDeploymentSettingScaleUnitStorage <a name="StackHciDeploymentSettingScaleUnitStorage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitStorage {
    string ConfigurationMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode">ConfigurationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}. |

---

##### `ConfigurationMode`<sup>Required</sup> <a name="ConfigurationMode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode"></a>

```csharp
public string ConfigurationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}.

---

### StackHciDeploymentSettingTimeouts <a name="StackHciDeploymentSettingTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciDeploymentSettingScaleUnitClusterOutputReference <a name="StackHciDeploymentSettingScaleUnitClusterOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput">AzureServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput">CloudAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput">WitnessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput">WitnessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint">AzureServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath">WitnessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType">WitnessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureServiceEndpointInput`<sup>Optional</sup> <a name="AzureServiceEndpointInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput"></a>

```csharp
public string AzureServiceEndpointInput { get; }
```

- *Type:* string

---

##### `CloudAccountNameInput`<sup>Optional</sup> <a name="CloudAccountNameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput"></a>

```csharp
public string CloudAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WitnessPathInput`<sup>Optional</sup> <a name="WitnessPathInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput"></a>

```csharp
public string WitnessPathInput { get; }
```

- *Type:* string

---

##### `WitnessTypeInput`<sup>Optional</sup> <a name="WitnessTypeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput"></a>

```csharp
public string WitnessTypeInput { get; }
```

- *Type:* string

---

##### `AzureServiceEndpoint`<sup>Required</sup> <a name="AzureServiceEndpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint"></a>

```csharp
public string AzureServiceEndpoint { get; }
```

- *Type:* string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WitnessPath`<sup>Required</sup> <a name="WitnessPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath"></a>

```csharp
public string WitnessPath { get; }
```

- *Type:* string

---

##### `WitnessType`<sup>Required</sup> <a name="WitnessType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType"></a>

```csharp
public string WitnessType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket">ResetJumboPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect">ResetNetworkDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology">ResetNetworkDirectTechnology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJumboPacket` <a name="ResetJumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket"></a>

```csharp
private void ResetJumboPacket()
```

##### `ResetNetworkDirect` <a name="ResetNetworkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect"></a>

```csharp
private void ResetNetworkDirect()
```

##### `ResetNetworkDirectTechnology` <a name="ResetNetworkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology"></a>

```csharp
private void ResetNetworkDirectTechnology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput">JumboPacketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput">NetworkDirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput">NetworkDirectTechnologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket">JumboPacket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect">NetworkDirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology">NetworkDirectTechnology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JumboPacketInput`<sup>Optional</sup> <a name="JumboPacketInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput"></a>

```csharp
public string JumboPacketInput { get; }
```

- *Type:* string

---

##### `NetworkDirectInput`<sup>Optional</sup> <a name="NetworkDirectInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput"></a>

```csharp
public string NetworkDirectInput { get; }
```

- *Type:* string

---

##### `NetworkDirectTechnologyInput`<sup>Optional</sup> <a name="NetworkDirectTechnologyInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput"></a>

```csharp
public string NetworkDirectTechnologyInput { get; }
```

- *Type:* string

---

##### `JumboPacket`<sup>Required</sup> <a name="JumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket"></a>

```csharp
public string JumboPacket { get; }
```

- *Type:* string

---

##### `NetworkDirect`<sup>Required</sup> <a name="NetworkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect"></a>

```csharp
public string NetworkDirect { get; }
```

- *Type:* string

---

##### `NetworkDirectTechnology`<sup>Required</sup> <a name="NetworkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology"></a>

```csharp
public string NetworkDirectTechnology { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentList <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride">PutAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride">PutQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride">PutVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride">ResetAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled">ResetAdapterPropertyOverrideEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride">ResetQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled">ResetQosPolicyOverrideEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride">ResetVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled">ResetVirtualSwitchConfigurationOverrideEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdapterPropertyOverride` <a name="PutAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride"></a>

```csharp
private void PutAdapterPropertyOverride(StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---

##### `PutQosPolicyOverride` <a name="PutQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride"></a>

```csharp
private void PutQosPolicyOverride(StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---

##### `PutVirtualSwitchConfigurationOverride` <a name="PutVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride"></a>

```csharp
private void PutVirtualSwitchConfigurationOverride(StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---

##### `ResetAdapterPropertyOverride` <a name="ResetAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride"></a>

```csharp
private void ResetAdapterPropertyOverride()
```

##### `ResetAdapterPropertyOverrideEnabled` <a name="ResetAdapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled"></a>

```csharp
private void ResetAdapterPropertyOverrideEnabled()
```

##### `ResetQosPolicyOverride` <a name="ResetQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride"></a>

```csharp
private void ResetQosPolicyOverride()
```

##### `ResetQosPolicyOverrideEnabled` <a name="ResetQosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled"></a>

```csharp
private void ResetQosPolicyOverrideEnabled()
```

##### `ResetVirtualSwitchConfigurationOverride` <a name="ResetVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride"></a>

```csharp
private void ResetVirtualSwitchConfigurationOverride()
```

##### `ResetVirtualSwitchConfigurationOverrideEnabled` <a name="ResetVirtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled"></a>

```csharp
private void ResetVirtualSwitchConfigurationOverrideEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride">AdapterPropertyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride">QosPolicyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride">VirtualSwitchConfigurationOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput">AdapterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput">AdapterPropertyOverrideEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput">AdapterPropertyOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput">QosPolicyOverrideEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput">QosPolicyOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput">VirtualSwitchConfigurationOverrideEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput">VirtualSwitchConfigurationOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter">Adapter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled">AdapterPropertyOverrideEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled">QosPolicyOverrideEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType">TrafficType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled">VirtualSwitchConfigurationOverrideEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdapterPropertyOverride`<sup>Required</sup> <a name="AdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference AdapterPropertyOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a>

---

##### `QosPolicyOverride`<sup>Required</sup> <a name="QosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference QosPolicyOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a>

---

##### `VirtualSwitchConfigurationOverride`<sup>Required</sup> <a name="VirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference VirtualSwitchConfigurationOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a>

---

##### `AdapterInput`<sup>Optional</sup> <a name="AdapterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput"></a>

```csharp
public string[] AdapterInput { get; }
```

- *Type:* string[]

---

##### `AdapterPropertyOverrideEnabledInput`<sup>Optional</sup> <a name="AdapterPropertyOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput"></a>

```csharp
public object AdapterPropertyOverrideEnabledInput { get; }
```

- *Type:* object

---

##### `AdapterPropertyOverrideInput`<sup>Optional</sup> <a name="AdapterPropertyOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride AdapterPropertyOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QosPolicyOverrideEnabledInput`<sup>Optional</sup> <a name="QosPolicyOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput"></a>

```csharp
public object QosPolicyOverrideEnabledInput { get; }
```

- *Type:* object

---

##### `QosPolicyOverrideInput`<sup>Optional</sup> <a name="QosPolicyOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride QosPolicyOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput"></a>

```csharp
public string[] TrafficTypeInput { get; }
```

- *Type:* string[]

---

##### `VirtualSwitchConfigurationOverrideEnabledInput`<sup>Optional</sup> <a name="VirtualSwitchConfigurationOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput"></a>

```csharp
public object VirtualSwitchConfigurationOverrideEnabledInput { get; }
```

- *Type:* object

---

##### `VirtualSwitchConfigurationOverrideInput`<sup>Optional</sup> <a name="VirtualSwitchConfigurationOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride VirtualSwitchConfigurationOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---

##### `Adapter`<sup>Required</sup> <a name="Adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter"></a>

```csharp
public string[] Adapter { get; }
```

- *Type:* string[]

---

##### `AdapterPropertyOverrideEnabled`<sup>Required</sup> <a name="AdapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled"></a>

```csharp
public object AdapterPropertyOverrideEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QosPolicyOverrideEnabled`<sup>Required</sup> <a name="QosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled"></a>

```csharp
public object QosPolicyOverrideEnabled { get; }
```

- *Type:* object

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType"></a>

```csharp
public string[] TrafficType { get; }
```

- *Type:* string[]

---

##### `VirtualSwitchConfigurationOverrideEnabled`<sup>Required</sup> <a name="VirtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled"></a>

```csharp
public object VirtualSwitchConfigurationOverrideEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb">ResetBandwidthPercentageSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster">ResetPriorityValue8021ActionCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb">ResetPriorityValue8021ActionSmb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthPercentageSmb` <a name="ResetBandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb"></a>

```csharp
private void ResetBandwidthPercentageSmb()
```

##### `ResetPriorityValue8021ActionCluster` <a name="ResetPriorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster"></a>

```csharp
private void ResetPriorityValue8021ActionCluster()
```

##### `ResetPriorityValue8021ActionSmb` <a name="ResetPriorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb"></a>

```csharp
private void ResetPriorityValue8021ActionSmb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput">BandwidthPercentageSmbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput">PriorityValue8021ActionClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput">PriorityValue8021ActionSmbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb">BandwidthPercentageSmb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster">PriorityValue8021ActionCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb">PriorityValue8021ActionSmb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthPercentageSmbInput`<sup>Optional</sup> <a name="BandwidthPercentageSmbInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput"></a>

```csharp
public string BandwidthPercentageSmbInput { get; }
```

- *Type:* string

---

##### `PriorityValue8021ActionClusterInput`<sup>Optional</sup> <a name="PriorityValue8021ActionClusterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput"></a>

```csharp
public string PriorityValue8021ActionClusterInput { get; }
```

- *Type:* string

---

##### `PriorityValue8021ActionSmbInput`<sup>Optional</sup> <a name="PriorityValue8021ActionSmbInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput"></a>

```csharp
public string PriorityValue8021ActionSmbInput { get; }
```

- *Type:* string

---

##### `BandwidthPercentageSmb`<sup>Required</sup> <a name="BandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb"></a>

```csharp
public string BandwidthPercentageSmb { get; }
```

- *Type:* string

---

##### `PriorityValue8021ActionCluster`<sup>Required</sup> <a name="PriorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster"></a>

```csharp
public string PriorityValue8021ActionCluster { get; }
```

- *Type:* string

---

##### `PriorityValue8021ActionSmb`<sup>Required</sup> <a name="PriorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb"></a>

```csharp
public string PriorityValue8021ActionSmb { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov">ResetEnableIov</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm">ResetLoadBalancingAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIov` <a name="ResetEnableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov"></a>

```csharp
private void ResetEnableIov()
```

##### `ResetLoadBalancingAlgorithm` <a name="ResetLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm"></a>

```csharp
private void ResetLoadBalancingAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput">EnableIovInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput">LoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov">EnableIov</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIovInput`<sup>Optional</sup> <a name="EnableIovInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput"></a>

```csharp
public string EnableIovInput { get; }
```

- *Type:* string

---

##### `LoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput"></a>

```csharp
public string LoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `EnableIov`<sup>Required</sup> <a name="EnableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov"></a>

```csharp
public string EnableIov { get; }
```

- *Type:* string

---

##### `LoadBalancingAlgorithm`<sup>Required</sup> <a name="LoadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork">PutStorageNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled">ResetStorageAutoIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled">ResetStorageConnectivitySwitchlessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntent` <a name="PutIntent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent"></a>

```csharp
private void PutIntent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent.parameter.value"></a>

- *Type:* object

---

##### `PutStorageNetwork` <a name="PutStorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork"></a>

```csharp
private void PutStorageNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork.parameter.value"></a>

- *Type:* object

---

##### `ResetStorageAutoIpEnabled` <a name="ResetStorageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled"></a>

```csharp
private void ResetStorageAutoIpEnabled()
```

##### `ResetStorageConnectivitySwitchlessEnabled` <a name="ResetStorageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled"></a>

```csharp
private void ResetStorageConnectivitySwitchlessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork">StorageNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput">IntentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput">StorageAutoIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput">StorageConnectivitySwitchlessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput">StorageNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled">StorageAutoIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled">StorageConnectivitySwitchlessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkIntentList Intent { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a>

---

##### `StorageNetwork`<sup>Required</sup> <a name="StorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList StorageNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a>

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput"></a>

```csharp
public object IntentInput { get; }
```

- *Type:* object

---

##### `StorageAutoIpEnabledInput`<sup>Optional</sup> <a name="StorageAutoIpEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput"></a>

```csharp
public object StorageAutoIpEnabledInput { get; }
```

- *Type:* object

---

##### `StorageConnectivitySwitchlessEnabledInput`<sup>Optional</sup> <a name="StorageConnectivitySwitchlessEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput"></a>

```csharp
public object StorageConnectivitySwitchlessEnabledInput { get; }
```

- *Type:* object

---

##### `StorageNetworkInput`<sup>Optional</sup> <a name="StorageNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput"></a>

```csharp
public object StorageNetworkInput { get; }
```

- *Type:* object

---

##### `StorageAutoIpEnabled`<sup>Required</sup> <a name="StorageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled"></a>

```csharp
public object StorageAutoIpEnabled { get; }
```

- *Type:* object

---

##### `StorageConnectivitySwitchlessEnabled`<sup>Required</sup> <a name="StorageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled"></a>

```csharp
public object StorageConnectivitySwitchlessEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput">NetworkAdapterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName">NetworkAdapterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAdapterNameInput`<sup>Optional</sup> <a name="NetworkAdapterNameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput"></a>

```csharp
public string NetworkAdapterNameInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkAdapterName`<sup>Required</sup> <a name="NetworkAdapterName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName"></a>

```csharp
public string NetworkAdapterName { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput">EndingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput">StartingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress">EndingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress">StartingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndingAddressInput`<sup>Optional</sup> <a name="EndingAddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput"></a>

```csharp
public string EndingAddressInput { get; }
```

- *Type:* string

---

##### `StartingAddressInput`<sup>Optional</sup> <a name="StartingAddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput"></a>

```csharp
public string StartingAddressInput { get; }
```

- *Type:* string

---

##### `EndingAddress`<sup>Required</sup> <a name="EndingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress"></a>

```csharp
public string EndingAddress { get; }
```

- *Type:* string

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress"></a>

```csharp
public string StartingAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool">PutIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled">ResetDhcpEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpPool` <a name="PutIpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool"></a>

```csharp
private void PutIpPool(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool.parameter.value"></a>

- *Type:* object

---

##### `ResetDhcpEnabled` <a name="ResetDhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled"></a>

```csharp
private void ResetDhcpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool">IpPool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput">DhcpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput">IpPoolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput">SubnetMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled">DhcpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask">SubnetMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpPool`<sup>Required</sup> <a name="IpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool"></a>

```csharp
public StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList IpPool { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a>

---

##### `DhcpEnabledInput`<sup>Optional</sup> <a name="DhcpEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput"></a>

```csharp
public object DhcpEnabledInput { get; }
```

- *Type:* object

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput"></a>

```csharp
public string[] DnsServerInput { get; }
```

- *Type:* string[]

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IpPoolInput`<sup>Optional</sup> <a name="IpPoolInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput"></a>

```csharp
public object IpPoolInput { get; }
```

- *Type:* object

---

##### `SubnetMaskInput`<sup>Optional</sup> <a name="SubnetMaskInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput"></a>

```csharp
public string SubnetMaskInput { get; }
```

- *Type:* string

---

##### `DhcpEnabled`<sup>Required</sup> <a name="DhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled"></a>

```csharp
public object DhcpEnabled { get; }
```

- *Type:* object

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask"></a>

```csharp
public string SubnetMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitList <a name="StackHciDeploymentSettingScaleUnitList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference <a name="StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput">CustomLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation">CustomLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomLocationInput`<sup>Optional</sup> <a name="CustomLocationInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput"></a>

```csharp
public string CustomLocationInput { get; }
```

- *Type:* string

---

##### `CustomLocation`<sup>Required</sup> <a name="CustomLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation"></a>

```csharp
public string CustomLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitOptionalService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---


### StackHciDeploymentSettingScaleUnitOutputReference <a name="StackHciDeploymentSettingScaleUnitOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork">PutHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork">PutInfrastructureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService">PutOptionalService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode">PutPhysicalNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled">ResetBitlockerBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled">ResetBitlockerDataVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled">ResetCredentialGuardEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled">ResetDriftControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled">ResetDrtmProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled">ResetEpisodicDataUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled">ResetEuLocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled">ResetHvciProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled">ResetSideChannelMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled">ResetSmbClusterEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled">ResetSmbSigningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled">ResetStreamingDataClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled">ResetWdacEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster"></a>

```csharp
private void PutCluster(StackHciDeploymentSettingScaleUnitCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---

##### `PutHostNetwork` <a name="PutHostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork"></a>

```csharp
private void PutHostNetwork(StackHciDeploymentSettingScaleUnitHostNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---

##### `PutInfrastructureNetwork` <a name="PutInfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork"></a>

```csharp
private void PutInfrastructureNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork.parameter.value"></a>

- *Type:* object

---

##### `PutOptionalService` <a name="PutOptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService"></a>

```csharp
private void PutOptionalService(StackHciDeploymentSettingScaleUnitOptionalService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---

##### `PutPhysicalNode` <a name="PutPhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode"></a>

```csharp
private void PutPhysicalNode(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode.parameter.value"></a>

- *Type:* object

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage"></a>

```csharp
private void PutStorage(StackHciDeploymentSettingScaleUnitStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---

##### `ResetBitlockerBootVolumeEnabled` <a name="ResetBitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled"></a>

```csharp
private void ResetBitlockerBootVolumeEnabled()
```

##### `ResetBitlockerDataVolumeEnabled` <a name="ResetBitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled"></a>

```csharp
private void ResetBitlockerDataVolumeEnabled()
```

##### `ResetCredentialGuardEnabled` <a name="ResetCredentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled"></a>

```csharp
private void ResetCredentialGuardEnabled()
```

##### `ResetDriftControlEnabled` <a name="ResetDriftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled"></a>

```csharp
private void ResetDriftControlEnabled()
```

##### `ResetDrtmProtectionEnabled` <a name="ResetDrtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled"></a>

```csharp
private void ResetDrtmProtectionEnabled()
```

##### `ResetEpisodicDataUploadEnabled` <a name="ResetEpisodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled"></a>

```csharp
private void ResetEpisodicDataUploadEnabled()
```

##### `ResetEuLocationEnabled` <a name="ResetEuLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled"></a>

```csharp
private void ResetEuLocationEnabled()
```

##### `ResetHvciProtectionEnabled` <a name="ResetHvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled"></a>

```csharp
private void ResetHvciProtectionEnabled()
```

##### `ResetSideChannelMitigationEnabled` <a name="ResetSideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled"></a>

```csharp
private void ResetSideChannelMitigationEnabled()
```

##### `ResetSmbClusterEncryptionEnabled` <a name="ResetSmbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled"></a>

```csharp
private void ResetSmbClusterEncryptionEnabled()
```

##### `ResetSmbSigningEnabled` <a name="ResetSmbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled"></a>

```csharp
private void ResetSmbSigningEnabled()
```

##### `ResetStreamingDataClientEnabled` <a name="ResetStreamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled"></a>

```csharp
private void ResetStreamingDataClientEnabled()
```

##### `ResetWdacEnabled` <a name="ResetWdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled"></a>

```csharp
private void ResetWdacEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork">HostNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork">InfrastructureNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService">OptionalService</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode">PhysicalNode</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput">ActiveDirectoryOrganizationalUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput">BitlockerBootVolumeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput">BitlockerDataVolumeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput">ClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput">CredentialGuardEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput">DomainFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput">DriftControlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput">DrtmProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput">EpisodicDataUploadEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput">EuLocationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput">HostNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput">HvciProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput">InfrastructureNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput">OptionalServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput">PhysicalNodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput">SecretsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput">SideChannelMitigationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput">SmbClusterEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput">SmbSigningEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput">StreamingDataClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput">WdacEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath">ActiveDirectoryOrganizationalUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled">BitlockerBootVolumeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled">BitlockerDataVolumeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled">CredentialGuardEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn">DomainFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled">DriftControlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled">DrtmProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled">EpisodicDataUploadEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled">EuLocationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled">HvciProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation">SecretsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled">SideChannelMitigationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled">SmbClusterEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled">SmbSigningEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled">StreamingDataClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled">WdacEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster"></a>

```csharp
public StackHciDeploymentSettingScaleUnitClusterOutputReference Cluster { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a>

---

##### `HostNetwork`<sup>Required</sup> <a name="HostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetworkOutputReference HostNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a>

---

##### `InfrastructureNetwork`<sup>Required</sup> <a name="InfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork"></a>

```csharp
public StackHciDeploymentSettingScaleUnitInfrastructureNetworkList InfrastructureNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a>

---

##### `OptionalService`<sup>Required</sup> <a name="OptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService"></a>

```csharp
public StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference OptionalService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a>

---

##### `PhysicalNode`<sup>Required</sup> <a name="PhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode"></a>

```csharp
public StackHciDeploymentSettingScaleUnitPhysicalNodeList PhysicalNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage"></a>

```csharp
public StackHciDeploymentSettingScaleUnitStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a>

---

##### `ActiveDirectoryOrganizationalUnitPathInput`<sup>Optional</sup> <a name="ActiveDirectoryOrganizationalUnitPathInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput"></a>

```csharp
public string ActiveDirectoryOrganizationalUnitPathInput { get; }
```

- *Type:* string

---

##### `BitlockerBootVolumeEnabledInput`<sup>Optional</sup> <a name="BitlockerBootVolumeEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput"></a>

```csharp
public object BitlockerBootVolumeEnabledInput { get; }
```

- *Type:* object

---

##### `BitlockerDataVolumeEnabledInput`<sup>Optional</sup> <a name="BitlockerDataVolumeEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput"></a>

```csharp
public object BitlockerDataVolumeEnabledInput { get; }
```

- *Type:* object

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitCluster ClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---

##### `CredentialGuardEnabledInput`<sup>Optional</sup> <a name="CredentialGuardEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput"></a>

```csharp
public object CredentialGuardEnabledInput { get; }
```

- *Type:* object

---

##### `DomainFqdnInput`<sup>Optional</sup> <a name="DomainFqdnInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput"></a>

```csharp
public string DomainFqdnInput { get; }
```

- *Type:* string

---

##### `DriftControlEnabledInput`<sup>Optional</sup> <a name="DriftControlEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput"></a>

```csharp
public object DriftControlEnabledInput { get; }
```

- *Type:* object

---

##### `DrtmProtectionEnabledInput`<sup>Optional</sup> <a name="DrtmProtectionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput"></a>

```csharp
public object DrtmProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `EpisodicDataUploadEnabledInput`<sup>Optional</sup> <a name="EpisodicDataUploadEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput"></a>

```csharp
public object EpisodicDataUploadEnabledInput { get; }
```

- *Type:* object

---

##### `EuLocationEnabledInput`<sup>Optional</sup> <a name="EuLocationEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput"></a>

```csharp
public object EuLocationEnabledInput { get; }
```

- *Type:* object

---

##### `HostNetworkInput`<sup>Optional</sup> <a name="HostNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitHostNetwork HostNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---

##### `HvciProtectionEnabledInput`<sup>Optional</sup> <a name="HvciProtectionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput"></a>

```csharp
public object HvciProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `InfrastructureNetworkInput`<sup>Optional</sup> <a name="InfrastructureNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput"></a>

```csharp
public object InfrastructureNetworkInput { get; }
```

- *Type:* object

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `OptionalServiceInput`<sup>Optional</sup> <a name="OptionalServiceInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitOptionalService OptionalServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---

##### `PhysicalNodeInput`<sup>Optional</sup> <a name="PhysicalNodeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput"></a>

```csharp
public object PhysicalNodeInput { get; }
```

- *Type:* object

---

##### `SecretsLocationInput`<sup>Optional</sup> <a name="SecretsLocationInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput"></a>

```csharp
public string SecretsLocationInput { get; }
```

- *Type:* string

---

##### `SideChannelMitigationEnabledInput`<sup>Optional</sup> <a name="SideChannelMitigationEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput"></a>

```csharp
public object SideChannelMitigationEnabledInput { get; }
```

- *Type:* object

---

##### `SmbClusterEncryptionEnabledInput`<sup>Optional</sup> <a name="SmbClusterEncryptionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput"></a>

```csharp
public object SmbClusterEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `SmbSigningEnabledInput`<sup>Optional</sup> <a name="SmbSigningEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput"></a>

```csharp
public object SmbSigningEnabledInput { get; }
```

- *Type:* object

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput"></a>

```csharp
public StackHciDeploymentSettingScaleUnitStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---

##### `StreamingDataClientEnabledInput`<sup>Optional</sup> <a name="StreamingDataClientEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput"></a>

```csharp
public object StreamingDataClientEnabledInput { get; }
```

- *Type:* object

---

##### `WdacEnabledInput`<sup>Optional</sup> <a name="WdacEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput"></a>

```csharp
public object WdacEnabledInput { get; }
```

- *Type:* object

---

##### `ActiveDirectoryOrganizationalUnitPath`<sup>Required</sup> <a name="ActiveDirectoryOrganizationalUnitPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath"></a>

```csharp
public string ActiveDirectoryOrganizationalUnitPath { get; }
```

- *Type:* string

---

##### `BitlockerBootVolumeEnabled`<sup>Required</sup> <a name="BitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled"></a>

```csharp
public object BitlockerBootVolumeEnabled { get; }
```

- *Type:* object

---

##### `BitlockerDataVolumeEnabled`<sup>Required</sup> <a name="BitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled"></a>

```csharp
public object BitlockerDataVolumeEnabled { get; }
```

- *Type:* object

---

##### `CredentialGuardEnabled`<sup>Required</sup> <a name="CredentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled"></a>

```csharp
public object CredentialGuardEnabled { get; }
```

- *Type:* object

---

##### `DomainFqdn`<sup>Required</sup> <a name="DomainFqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn"></a>

```csharp
public string DomainFqdn { get; }
```

- *Type:* string

---

##### `DriftControlEnabled`<sup>Required</sup> <a name="DriftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled"></a>

```csharp
public object DriftControlEnabled { get; }
```

- *Type:* object

---

##### `DrtmProtectionEnabled`<sup>Required</sup> <a name="DrtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled"></a>

```csharp
public object DrtmProtectionEnabled { get; }
```

- *Type:* object

---

##### `EpisodicDataUploadEnabled`<sup>Required</sup> <a name="EpisodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled"></a>

```csharp
public object EpisodicDataUploadEnabled { get; }
```

- *Type:* object

---

##### `EuLocationEnabled`<sup>Required</sup> <a name="EuLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled"></a>

```csharp
public object EuLocationEnabled { get; }
```

- *Type:* object

---

##### `HvciProtectionEnabled`<sup>Required</sup> <a name="HvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled"></a>

```csharp
public object HvciProtectionEnabled { get; }
```

- *Type:* object

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `SecretsLocation`<sup>Required</sup> <a name="SecretsLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation"></a>

```csharp
public string SecretsLocation { get; }
```

- *Type:* string

---

##### `SideChannelMitigationEnabled`<sup>Required</sup> <a name="SideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled"></a>

```csharp
public object SideChannelMitigationEnabled { get; }
```

- *Type:* object

---

##### `SmbClusterEncryptionEnabled`<sup>Required</sup> <a name="SmbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled"></a>

```csharp
public object SmbClusterEncryptionEnabled { get; }
```

- *Type:* object

---

##### `SmbSigningEnabled`<sup>Required</sup> <a name="SmbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled"></a>

```csharp
public object SmbSigningEnabled { get; }
```

- *Type:* object

---

##### `StreamingDataClientEnabled`<sup>Required</sup> <a name="StreamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled"></a>

```csharp
public object StreamingDataClientEnabled { get; }
```

- *Type:* object

---

##### `WdacEnabled`<sup>Required</sup> <a name="WdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled"></a>

```csharp
public object WdacEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeList <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitPhysicalNodeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get"></a>

```csharp
private StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackHciDeploymentSettingScaleUnitStorageOutputReference <a name="StackHciDeploymentSettingScaleUnitStorageOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingScaleUnitStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput">ConfigurationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode">ConfigurationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationModeInput`<sup>Optional</sup> <a name="ConfigurationModeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput"></a>

```csharp
public string ConfigurationModeInput { get; }
```

- *Type:* string

---

##### `ConfigurationMode`<sup>Required</sup> <a name="ConfigurationMode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode"></a>

```csharp
public string ConfigurationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue"></a>

```csharp
public StackHciDeploymentSettingScaleUnitStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---


### StackHciDeploymentSettingTimeoutsOutputReference <a name="StackHciDeploymentSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciDeploymentSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



