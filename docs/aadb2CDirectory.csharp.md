# `aadb2CDirectory` Submodule <a name="`aadb2CDirectory` Submodule" id="@cdktf/provider-azurerm.aadb2CDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Aadb2CDirectory <a name="Aadb2CDirectory" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory azurerm_aadb2c_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Aadb2CDirectory(Construct Scope, string Id, Aadb2CDirectoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig">Aadb2CDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig">Aadb2CDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts"></a>

```csharp
private void PutTimeouts(Aadb2CDirectoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a>

---

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Aadb2CDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Aadb2CDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Aadb2CDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Aadb2CDirectory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Aadb2CDirectory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Aadb2CDirectory resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Aadb2CDirectory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Aadb2CDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Aadb2CDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.billingType">BillingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.effectiveStartDate">EffectiveStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference">Aadb2CDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocationInput">DataResidencyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocation">DataResidencyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.billingType"></a>

```csharp
public string BillingType { get; }
```

- *Type:* string

---

##### `EffectiveStartDate`<sup>Required</sup> <a name="EffectiveStartDate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.effectiveStartDate"></a>

```csharp
public string EffectiveStartDate { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeouts"></a>

```csharp
public Aadb2CDirectoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference">Aadb2CDirectoryTimeoutsOutputReference</a>

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `DataResidencyLocationInput`<sup>Optional</sup> <a name="DataResidencyLocationInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocationInput"></a>

```csharp
public string DataResidencyLocationInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DataResidencyLocation`<sup>Required</sup> <a name="DataResidencyLocation" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocation"></a>

```csharp
public string DataResidencyLocation { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Aadb2CDirectoryConfig <a name="Aadb2CDirectoryConfig" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Aadb2CDirectoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataResidencyLocation,
    string DomainName,
    string ResourceGroupName,
    string SkuName,
    string CountryCode = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    Aadb2CDirectoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dataResidencyLocation">DataResidencyLocation</a></code> | <code>string</code> | Location in which the B2C tenant is hosted and data resides. See https://aka.ms/B2CDataResidency for more information. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.domainName">DomainName</a></code> | <code>string</code> | Domain name of the B2C tenant, including onmicrosoft.com suffix. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#resource_group_name Aadb2CDirectory#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.skuName">SkuName</a></code> | <code>string</code> | Billing SKU for the B2C tenant. See https://aka.ms/b2cBilling for more information. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.countryCode">CountryCode</a></code> | <code>string</code> | Country code of the B2C tenant. See https://aka.ms/B2CDataResidency for valid country codes. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The initial display name of the B2C tenant. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#id Aadb2CDirectory#id}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#tags Aadb2CDirectory#tags}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataResidencyLocation`<sup>Required</sup> <a name="DataResidencyLocation" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dataResidencyLocation"></a>

```csharp
public string DataResidencyLocation { get; set; }
```

- *Type:* string

Location in which the B2C tenant is hosted and data resides. See https://aka.ms/B2CDataResidency for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#data_residency_location Aadb2CDirectory#data_residency_location}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Domain name of the B2C tenant, including onmicrosoft.com suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#domain_name Aadb2CDirectory#domain_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#resource_group_name Aadb2CDirectory#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Billing SKU for the B2C tenant. See https://aka.ms/b2cBilling for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#sku_name Aadb2CDirectory#sku_name}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Country code of the B2C tenant. See https://aka.ms/B2CDataResidency for valid country codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#country_code Aadb2CDirectory#country_code}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The initial display name of the B2C tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#display_name Aadb2CDirectory#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#id Aadb2CDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#tags Aadb2CDirectory#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.timeouts"></a>

```csharp
public Aadb2CDirectoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#timeouts Aadb2CDirectory#timeouts}

---

### Aadb2CDirectoryTimeouts <a name="Aadb2CDirectoryTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Aadb2CDirectoryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#create Aadb2CDirectory#create}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#delete Aadb2CDirectory#delete}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#read Aadb2CDirectory#read}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#update Aadb2CDirectory#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#create Aadb2CDirectory#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#delete Aadb2CDirectory#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#read Aadb2CDirectory#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/aadb2c_directory#update Aadb2CDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Aadb2CDirectoryTimeoutsOutputReference <a name="Aadb2CDirectoryTimeoutsOutputReference" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Aadb2CDirectoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



