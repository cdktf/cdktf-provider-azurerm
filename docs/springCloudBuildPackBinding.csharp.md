# `springCloudBuildPackBinding` Submodule <a name="`springCloudBuildPackBinding` Submodule" id="@cdktf/provider-azurerm.springCloudBuildPackBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudBuildPackBinding <a name="SpringCloudBuildPackBinding" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding azurerm_spring_cloud_build_pack_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBinding(Construct Scope, string Id, SpringCloudBuildPackBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig">SpringCloudBuildPackBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig">SpringCloudBuildPackBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch">PutLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType">ResetBindingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch">ResetLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLaunch` <a name="PutLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch"></a>

```csharp
private void PutLaunch(SpringCloudBuildPackBindingLaunch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudBuildPackBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

---

##### `ResetBindingType` <a name="ResetBindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType"></a>

```csharp
private void ResetBindingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLaunch` <a name="ResetLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch"></a>

```csharp
private void ResetLaunch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudBuildPackBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudBuildPackBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudBuildPackBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudBuildPackBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudBuildPackBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudBuildPackBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudBuildPackBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudBuildPackBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudBuildPackBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch">Launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput">BindingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput">LaunchInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput">SpringCloudBuilderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType">BindingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId">SpringCloudBuilderId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Launch`<sup>Required</sup> <a name="Launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch"></a>

```csharp
public SpringCloudBuildPackBindingLaunchOutputReference Launch { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts"></a>

```csharp
public SpringCloudBuildPackBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a>

---

##### `BindingTypeInput`<sup>Optional</sup> <a name="BindingTypeInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput"></a>

```csharp
public string BindingTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LaunchInput`<sup>Optional</sup> <a name="LaunchInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput"></a>

```csharp
public SpringCloudBuildPackBindingLaunch LaunchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpringCloudBuilderIdInput`<sup>Optional</sup> <a name="SpringCloudBuilderIdInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput"></a>

```csharp
public string SpringCloudBuilderIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BindingType`<sup>Required</sup> <a name="BindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType"></a>

```csharp
public string BindingType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpringCloudBuilderId`<sup>Required</sup> <a name="SpringCloudBuilderId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId"></a>

```csharp
public string SpringCloudBuilderId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudBuildPackBindingConfig <a name="SpringCloudBuildPackBindingConfig" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudBuilderId,
    string BindingType = null,
    string Id = null,
    SpringCloudBuildPackBindingLaunch Launch = null,
    SpringCloudBuildPackBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId">SpringCloudBuilderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType">BindingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch">Launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | launch block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}.

---

##### `SpringCloudBuilderId`<sup>Required</sup> <a name="SpringCloudBuilderId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId"></a>

```csharp
public string SpringCloudBuilderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}.

---

##### `BindingType`<sup>Optional</sup> <a name="BindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType"></a>

```csharp
public string BindingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Launch`<sup>Optional</sup> <a name="Launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch"></a>

```csharp
public SpringCloudBuildPackBindingLaunch Launch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

launch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#launch SpringCloudBuildPackBinding#launch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts"></a>

```csharp
public SpringCloudBuildPackBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#timeouts SpringCloudBuildPackBinding#timeouts}

---

### SpringCloudBuildPackBindingLaunch <a name="SpringCloudBuildPackBindingLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBindingLaunch {
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    System.Collections.Generic.IDictionary<string, string> Secrets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}.

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}.

---

### SpringCloudBuildPackBindingTimeouts <a name="SpringCloudBuildPackBindingTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudBuildPackBindingLaunchOutputReference <a name="SpringCloudBuildPackBindingLaunchOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBindingLaunchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets"></a>

```csharp
private void ResetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput">SecretsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue"></a>

```csharp
public SpringCloudBuildPackBindingLaunch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---


### SpringCloudBuildPackBindingTimeoutsOutputReference <a name="SpringCloudBuildPackBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudBuildPackBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



