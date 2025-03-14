# `hpcCacheBlobNfsTarget` Submodule <a name="`hpcCacheBlobNfsTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheBlobNfsTarget <a name="HpcCacheBlobNfsTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target azurerm_hpc_cache_blob_nfs_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobNfsTarget(Construct Scope, string Id, HpcCacheBlobNfsTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig">HpcCacheBlobNfsTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig">HpcCacheBlobNfsTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName">ResetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds">ResetVerificationTimerInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds">ResetWriteBackTimerInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(HpcCacheBlobNfsTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

---

##### `ResetAccessPolicyName` <a name="ResetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName"></a>

```csharp
private void ResetAccessPolicyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVerificationTimerInSeconds` <a name="ResetVerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds"></a>

```csharp
private void ResetVerificationTimerInSeconds()
```

##### `ResetWriteBackTimerInSeconds` <a name="ResetWriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds"></a>

```csharp
private void ResetWriteBackTimerInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobNfsTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobNfsTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobNfsTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobNfsTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCacheBlobNfsTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCacheBlobNfsTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheBlobNfsTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput">AccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput">CacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput">VerificationTimerInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput">WriteBackTimerInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName">CacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds">VerificationTimerInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds">WriteBackTimerInSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts"></a>

```csharp
public HpcCacheBlobNfsTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a>

---

##### `AccessPolicyNameInput`<sup>Optional</sup> <a name="AccessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput"></a>

```csharp
public string AccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `CacheNameInput`<sup>Optional</sup> <a name="CacheNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput"></a>

```csharp
public string CacheNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `VerificationTimerInSecondsInput`<sup>Optional</sup> <a name="VerificationTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput"></a>

```csharp
public double VerificationTimerInSecondsInput { get; }
```

- *Type:* double

---

##### `WriteBackTimerInSecondsInput`<sup>Optional</sup> <a name="WriteBackTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput"></a>

```csharp
public double WriteBackTimerInSecondsInput { get; }
```

- *Type:* double

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; }
```

- *Type:* string

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName"></a>

```csharp
public string CacheName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

##### `VerificationTimerInSeconds`<sup>Required</sup> <a name="VerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds"></a>

```csharp
public double VerificationTimerInSeconds { get; }
```

- *Type:* double

---

##### `WriteBackTimerInSeconds`<sup>Required</sup> <a name="WriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds"></a>

```csharp
public double WriteBackTimerInSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheBlobNfsTargetConfig <a name="HpcCacheBlobNfsTargetConfig" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobNfsTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CacheName,
    string Name,
    string NamespacePath,
    string ResourceGroupName,
    string StorageContainerId,
    string UsageModel,
    string AccessPolicyName = null,
    string Id = null,
    HpcCacheBlobNfsTargetTimeouts Timeouts = null,
    double VerificationTimerInSeconds = null,
    double WriteBackTimerInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName">CacheName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel">UsageModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds">VerificationTimerInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds">WriteBackTimerInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName"></a>

```csharp
public string CacheName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}.

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}.

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}.

---

##### `AccessPolicyName`<sup>Optional</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts"></a>

```csharp
public HpcCacheBlobNfsTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#timeouts HpcCacheBlobNfsTarget#timeouts}

---

##### `VerificationTimerInSeconds`<sup>Optional</sup> <a name="VerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds"></a>

```csharp
public double VerificationTimerInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}.

---

##### `WriteBackTimerInSeconds`<sup>Optional</sup> <a name="WriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds"></a>

```csharp
public double WriteBackTimerInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}.

---

### HpcCacheBlobNfsTargetTimeouts <a name="HpcCacheBlobNfsTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobNfsTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheBlobNfsTargetTimeoutsOutputReference <a name="HpcCacheBlobNfsTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobNfsTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



