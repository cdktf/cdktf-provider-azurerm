# `iothubDeviceUpdateInstance` Submodule <a name="`iothubDeviceUpdateInstance` Submodule" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubDeviceUpdateInstance <a name="IothubDeviceUpdateInstance" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance azurerm_iothub_device_update_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstance(Construct Scope, string Id, IothubDeviceUpdateInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig">IothubDeviceUpdateInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig">IothubDeviceUpdateInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount">PutDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled">ResetDiagnosticEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount">ResetDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiagnosticStorageAccount` <a name="PutDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount"></a>

```csharp
private void PutDiagnosticStorageAccount(IothubDeviceUpdateInstanceDiagnosticStorageAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(IothubDeviceUpdateInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

---

##### `ResetDiagnosticEnabled` <a name="ResetDiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled"></a>

```csharp
private void ResetDiagnosticEnabled()
```

##### `ResetDiagnosticStorageAccount` <a name="ResetDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount"></a>

```csharp
private void ResetDiagnosticStorageAccount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubDeviceUpdateInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubDeviceUpdateInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubDeviceUpdateInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubDeviceUpdateInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IothubDeviceUpdateInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IothubDeviceUpdateInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IothubDeviceUpdateInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount">DiagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput">DeviceUpdateAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput">DiagnosticEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput">DiagnosticStorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput">IothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId">DeviceUpdateAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled">DiagnosticEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId">IothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DiagnosticStorageAccount`<sup>Required</sup> <a name="DiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount"></a>

```csharp
public IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference DiagnosticStorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts"></a>

```csharp
public IothubDeviceUpdateInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a>

---

##### `DeviceUpdateAccountIdInput`<sup>Optional</sup> <a name="DeviceUpdateAccountIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput"></a>

```csharp
public string DeviceUpdateAccountIdInput { get; }
```

- *Type:* string

---

##### `DiagnosticEnabledInput`<sup>Optional</sup> <a name="DiagnosticEnabledInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput"></a>

```csharp
public object DiagnosticEnabledInput { get; }
```

- *Type:* object

---

##### `DiagnosticStorageAccountInput`<sup>Optional</sup> <a name="DiagnosticStorageAccountInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput"></a>

```csharp
public IothubDeviceUpdateInstanceDiagnosticStorageAccount DiagnosticStorageAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput"></a>

```csharp
public string IothubIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeviceUpdateAccountId`<sup>Required</sup> <a name="DeviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId"></a>

```csharp
public string DeviceUpdateAccountId { get; }
```

- *Type:* string

---

##### `DiagnosticEnabled`<sup>Required</sup> <a name="DiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled"></a>

```csharp
public object DiagnosticEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId"></a>

```csharp
public string IothubId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubDeviceUpdateInstanceConfig <a name="IothubDeviceUpdateInstanceConfig" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeviceUpdateAccountId,
    string IothubId,
    string Name,
    object DiagnosticEnabled = null,
    IothubDeviceUpdateInstanceDiagnosticStorageAccount DiagnosticStorageAccount = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IothubDeviceUpdateInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId">DeviceUpdateAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId">IothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled">DiagnosticEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount">DiagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | diagnostic_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeviceUpdateAccountId`<sup>Required</sup> <a name="DeviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId"></a>

```csharp
public string DeviceUpdateAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}.

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId"></a>

```csharp
public string IothubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}.

---

##### `DiagnosticEnabled`<sup>Optional</sup> <a name="DiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled"></a>

```csharp
public object DiagnosticEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}.

---

##### `DiagnosticStorageAccount`<sup>Optional</sup> <a name="DiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount"></a>

```csharp
public IothubDeviceUpdateInstanceDiagnosticStorageAccount DiagnosticStorageAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

diagnostic_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#diagnostic_storage_account IothubDeviceUpdateInstance#diagnostic_storage_account}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts"></a>

```csharp
public IothubDeviceUpdateInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#timeouts IothubDeviceUpdateInstance#timeouts}

---

### IothubDeviceUpdateInstanceDiagnosticStorageAccount <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstanceDiagnosticStorageAccount {
    string ConnectionString,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IothubDeviceUpdateInstanceTimeouts <a name="IothubDeviceUpdateInstanceTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue"></a>

```csharp
public IothubDeviceUpdateInstanceDiagnosticStorageAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---


### IothubDeviceUpdateInstanceTimeoutsOutputReference <a name="IothubDeviceUpdateInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubDeviceUpdateInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



