# `hpcCacheBlobTarget` Submodule <a name="`hpcCacheBlobTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheBlobTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheBlobTarget <a name="HpcCacheBlobTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target azurerm_hpc_cache_blob_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobTarget(Construct Scope, string Id, HpcCacheBlobTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig">HpcCacheBlobTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig">HpcCacheBlobTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetAccessPolicyName">ResetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(HpcCacheBlobTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

---

##### `ResetAccessPolicyName` <a name="ResetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetAccessPolicyName"></a>

```csharp
private void ResetAccessPolicyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheBlobTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheBlobTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HpcCacheBlobTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCacheBlobTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCacheBlobTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheBlobTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference">HpcCacheBlobTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyNameInput">AccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheNameInput">CacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheName">CacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeouts"></a>

```csharp
public HpcCacheBlobTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference">HpcCacheBlobTargetTimeoutsOutputReference</a>

---

##### `AccessPolicyNameInput`<sup>Optional</sup> <a name="AccessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyNameInput"></a>

```csharp
public string AccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `CacheNameInput`<sup>Optional</sup> <a name="CacheNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheNameInput"></a>

```csharp
public string CacheNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; }
```

- *Type:* string

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheName"></a>

```csharp
public string CacheName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheBlobTargetConfig <a name="HpcCacheBlobTargetConfig" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobTargetConfig {
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
    string AccessPolicyName = null,
    string Id = null,
    HpcCacheBlobTargetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.cacheName">CacheName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#cache_name HpcCacheBlobTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#name HpcCacheBlobTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#namespace_path HpcCacheBlobTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#resource_group_name HpcCacheBlobTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#storage_container_id HpcCacheBlobTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#access_policy_name HpcCacheBlobTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#id HpcCacheBlobTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.cacheName"></a>

```csharp
public string CacheName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#cache_name HpcCacheBlobTarget#cache_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#name HpcCacheBlobTarget#name}.

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#namespace_path HpcCacheBlobTarget#namespace_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#resource_group_name HpcCacheBlobTarget#resource_group_name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#storage_container_id HpcCacheBlobTarget#storage_container_id}.

---

##### `AccessPolicyName`<sup>Optional</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#access_policy_name HpcCacheBlobTarget#access_policy_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#id HpcCacheBlobTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.timeouts"></a>

```csharp
public HpcCacheBlobTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#timeouts HpcCacheBlobTarget#timeouts}

---

### HpcCacheBlobTargetTimeouts <a name="HpcCacheBlobTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#create HpcCacheBlobTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#delete HpcCacheBlobTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#read HpcCacheBlobTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#update HpcCacheBlobTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#create HpcCacheBlobTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#delete HpcCacheBlobTarget#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#read HpcCacheBlobTarget#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/hpc_cache_blob_target#update HpcCacheBlobTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheBlobTargetTimeoutsOutputReference <a name="HpcCacheBlobTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheBlobTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



