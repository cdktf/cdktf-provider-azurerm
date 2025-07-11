# `qumuloFileSystem` Submodule <a name="`qumuloFileSystem` Submodule" id="@cdktf/provider-azurerm.qumuloFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QumuloFileSystem <a name="QumuloFileSystem" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system azurerm_qumulo_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new QumuloFileSystem(Construct Scope, string Id, QumuloFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig">QumuloFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig">QumuloFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId">ResetOfferId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId">ResetPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId">ResetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(QumuloFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOfferId` <a name="ResetOfferId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId"></a>

```csharp
private void ResetOfferId()
```

##### `ResetPlanId` <a name="ResetPlanId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId"></a>

```csharp
private void ResetPlanId()
```

##### `ResetPublisherId` <a name="ResetPublisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId"></a>

```csharp
private void ResetPublisherId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

QumuloFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

QumuloFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

QumuloFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

QumuloFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QumuloFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QumuloFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QumuloFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput">OfferIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput">PlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput">PublisherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput">StorageSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId">OfferId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId">PlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId">PublisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku">StorageSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts"></a>

```csharp
public QumuloFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OfferIdInput`<sup>Optional</sup> <a name="OfferIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput"></a>

```csharp
public string OfferIdInput { get; }
```

- *Type:* string

---

##### `PlanIdInput`<sup>Optional</sup> <a name="PlanIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput"></a>

```csharp
public string PlanIdInput { get; }
```

- *Type:* string

---

##### `PublisherIdInput`<sup>Optional</sup> <a name="PublisherIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput"></a>

```csharp
public string PublisherIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageSkuInput`<sup>Optional</sup> <a name="StorageSkuInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput"></a>

```csharp
public string StorageSkuInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OfferId`<sup>Required</sup> <a name="OfferId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId"></a>

```csharp
public string OfferId { get; }
```

- *Type:* string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId"></a>

```csharp
public string PlanId { get; }
```

- *Type:* string

---

##### `PublisherId`<sup>Required</sup> <a name="PublisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId"></a>

```csharp
public string PublisherId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageSku`<sup>Required</sup> <a name="StorageSku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku"></a>

```csharp
public string StorageSku { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QumuloFileSystemConfig <a name="QumuloFileSystemConfig" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new QumuloFileSystemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminPassword,
    string Email,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageSku,
    string SubnetId,
    string Zone,
    string Id = null,
    string OfferId = null,
    string PlanId = null,
    string PublisherId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    QumuloFileSystemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku">StorageSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId">OfferId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId">PlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId">PublisherId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}.

---

##### `StorageSku`<sup>Required</sup> <a name="StorageSku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku"></a>

```csharp
public string StorageSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}.

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OfferId`<sup>Optional</sup> <a name="OfferId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId"></a>

```csharp
public string OfferId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}.

---

##### `PlanId`<sup>Optional</sup> <a name="PlanId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId"></a>

```csharp
public string PlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}.

---

##### `PublisherId`<sup>Optional</sup> <a name="PublisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId"></a>

```csharp
public string PublisherId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts"></a>

```csharp
public QumuloFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#timeouts QumuloFileSystem#timeouts}

---

### QumuloFileSystemTimeouts <a name="QumuloFileSystemTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new QumuloFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QumuloFileSystemTimeoutsOutputReference <a name="QumuloFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new QumuloFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



