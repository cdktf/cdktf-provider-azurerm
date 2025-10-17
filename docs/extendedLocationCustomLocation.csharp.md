# `extendedLocationCustomLocation` Submodule <a name="`extendedLocationCustomLocation` Submodule" id="@cdktf/provider-azurerm.extendedLocationCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtendedLocationCustomLocation <a name="ExtendedLocationCustomLocation" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location azurerm_extended_location_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocation(Construct Scope, string Id, ExtendedLocationCustomLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType">ResetHostType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication"></a>

```csharp
private void PutAuthentication(ExtendedLocationCustomLocationAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts"></a>

```csharp
private void PutTimeouts(ExtendedLocationCustomLocationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetHostType` <a name="ResetHostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType"></a>

```csharp
private void ResetHostType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExtendedLocationCustomLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExtendedLocationCustomLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExtendedLocationCustomLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExtendedLocationCustomLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExtendedLocationCustomLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExtendedLocationCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExtendedLocationCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput">ClusterExtensionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput">HostResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput">HostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds">ClusterExtensionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId">HostResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType">HostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication"></a>

```csharp
public ExtendedLocationCustomLocationAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts"></a>

```csharp
public ExtendedLocationCustomLocationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput"></a>

```csharp
public ExtendedLocationCustomLocationAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `ClusterExtensionIdsInput`<sup>Optional</sup> <a name="ClusterExtensionIdsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput"></a>

```csharp
public string[] ClusterExtensionIdsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `HostResourceIdInput`<sup>Optional</sup> <a name="HostResourceIdInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput"></a>

```csharp
public string HostResourceIdInput { get; }
```

- *Type:* string

---

##### `HostTypeInput`<sup>Optional</sup> <a name="HostTypeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput"></a>

```csharp
public string HostTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput"></a>

```csharp
public IResolvable|ExtendedLocationCustomLocationTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---

##### `ClusterExtensionIds`<sup>Required</sup> <a name="ClusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds"></a>

```csharp
public string[] ClusterExtensionIds { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HostResourceId`<sup>Required</sup> <a name="HostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId"></a>

```csharp
public string HostResourceId { get; }
```

- *Type:* string

---

##### `HostType`<sup>Required</sup> <a name="HostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType"></a>

```csharp
public string HostType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtendedLocationCustomLocationAuthentication <a name="ExtendedLocationCustomLocationAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocationAuthentication {
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}.

---

### ExtendedLocationCustomLocationConfig <a name="ExtendedLocationCustomLocationConfig" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ClusterExtensionIds,
    string HostResourceId,
    string Location,
    string Name,
    string Namespace,
    string ResourceGroupName,
    ExtendedLocationCustomLocationAuthentication Authentication = null,
    string DisplayName = null,
    string HostType = null,
    string Id = null,
    ExtendedLocationCustomLocationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds">ClusterExtensionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId">HostResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType">HostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterExtensionIds`<sup>Required</sup> <a name="ClusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds"></a>

```csharp
public string[] ClusterExtensionIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}.

---

##### `HostResourceId`<sup>Required</sup> <a name="HostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId"></a>

```csharp
public string HostResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication"></a>

```csharp
public ExtendedLocationCustomLocationAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#authentication ExtendedLocationCustomLocation#authentication}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}.

---

##### `HostType`<sup>Optional</sup> <a name="HostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType"></a>

```csharp
public string HostType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts"></a>

```csharp
public ExtendedLocationCustomLocationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#timeouts ExtendedLocationCustomLocation#timeouts}

---

### ExtendedLocationCustomLocationTimeouts <a name="ExtendedLocationCustomLocationTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExtendedLocationCustomLocationAuthenticationOutputReference <a name="ExtendedLocationCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocationAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ExtendedLocationCustomLocationAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---


### ExtendedLocationCustomLocationTimeoutsOutputReference <a name="ExtendedLocationCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExtendedLocationCustomLocationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ExtendedLocationCustomLocationTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---



