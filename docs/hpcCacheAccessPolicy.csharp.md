# `hpcCacheAccessPolicy` Submodule <a name="`hpcCacheAccessPolicy` Submodule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheAccessPolicy <a name="HpcCacheAccessPolicy" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy azurerm_hpc_cache_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicy(Construct Scope, string Id, HpcCacheAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig">HpcCacheAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig">HpcCacheAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule">PutAccessRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRule` <a name="PutAccessRule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule"></a>

```csharp
private void PutAccessRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(HpcCacheAccessPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HpcCacheAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCacheAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCacheAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRule">AccessRule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList">HpcCacheAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference">HpcCacheAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRuleInput">AccessRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheIdInput">HpcCacheIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheId">HpcCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRule"></a>

```csharp
public HpcCacheAccessPolicyAccessRuleList AccessRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList">HpcCacheAccessPolicyAccessRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeouts"></a>

```csharp
public HpcCacheAccessPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference">HpcCacheAccessPolicyTimeoutsOutputReference</a>

---

##### `AccessRuleInput`<sup>Optional</sup> <a name="AccessRuleInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRuleInput"></a>

```csharp
public object AccessRuleInput { get; }
```

- *Type:* object

---

##### `HpcCacheIdInput`<sup>Optional</sup> <a name="HpcCacheIdInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheIdInput"></a>

```csharp
public string HpcCacheIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `HpcCacheId`<sup>Required</sup> <a name="HpcCacheId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheId"></a>

```csharp
public string HpcCacheId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheAccessPolicyAccessRule <a name="HpcCacheAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyAccessRule {
    string Access,
    string Scope,
    double AnonymousGid = null,
    double AnonymousUid = null,
    string Filter = null,
    object RootSquashEnabled = null,
    object SubmountAccessEnabled = null,
    object SuidEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#access HpcCacheAccessPolicy#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#scope HpcCacheAccessPolicy#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousGid">AnonymousGid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#anonymous_gid HpcCacheAccessPolicy#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousUid">AnonymousUid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#anonymous_uid HpcCacheAccessPolicy#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#filter HpcCacheAccessPolicy#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#root_squash_enabled HpcCacheAccessPolicy#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#submount_access_enabled HpcCacheAccessPolicy#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.suidEnabled">SuidEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#suid_enabled HpcCacheAccessPolicy#suid_enabled}. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#access HpcCacheAccessPolicy#access}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#scope HpcCacheAccessPolicy#scope}.

---

##### `AnonymousGid`<sup>Optional</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousGid"></a>

```csharp
public double AnonymousGid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#anonymous_gid HpcCacheAccessPolicy#anonymous_gid}.

---

##### `AnonymousUid`<sup>Optional</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousUid"></a>

```csharp
public double AnonymousUid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#anonymous_uid HpcCacheAccessPolicy#anonymous_uid}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#filter HpcCacheAccessPolicy#filter}.

---

##### `RootSquashEnabled`<sup>Optional</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```csharp
public object RootSquashEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#root_squash_enabled HpcCacheAccessPolicy#root_squash_enabled}.

---

##### `SubmountAccessEnabled`<sup>Optional</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```csharp
public object SubmountAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#submount_access_enabled HpcCacheAccessPolicy#submount_access_enabled}.

---

##### `SuidEnabled`<sup>Optional</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.suidEnabled"></a>

```csharp
public object SuidEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#suid_enabled HpcCacheAccessPolicy#suid_enabled}.

---

### HpcCacheAccessPolicyConfig <a name="HpcCacheAccessPolicyConfig" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AccessRule,
    string HpcCacheId,
    string Name,
    string Id = null,
    HpcCacheAccessPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.accessRule">AccessRule</a></code> | <code>object</code> | access_rule block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.hpcCacheId">HpcCacheId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.accessRule"></a>

```csharp
public object AccessRule { get; set; }
```

- *Type:* object

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#access_rule HpcCacheAccessPolicy#access_rule}

---

##### `HpcCacheId`<sup>Required</sup> <a name="HpcCacheId" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.hpcCacheId"></a>

```csharp
public string HpcCacheId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.timeouts"></a>

```csharp
public HpcCacheAccessPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#timeouts HpcCacheAccessPolicy#timeouts}

---

### HpcCacheAccessPolicyTimeouts <a name="HpcCacheAccessPolicyTimeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheAccessPolicyAccessRuleList <a name="HpcCacheAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyAccessRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get"></a>

```csharp
private HpcCacheAccessPolicyAccessRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheAccessPolicyAccessRuleOutputReference <a name="HpcCacheAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyAccessRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousGid">ResetAnonymousGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousUid">ResetAnonymousUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">ResetRootSquashEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">ResetSubmountAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSuidEnabled">ResetSuidEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnonymousGid` <a name="ResetAnonymousGid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```csharp
private void ResetAnonymousGid()
```

##### `ResetAnonymousUid` <a name="ResetAnonymousUid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```csharp
private void ResetAnonymousUid()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRootSquashEnabled` <a name="ResetRootSquashEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```csharp
private void ResetRootSquashEnabled()
```

##### `ResetSubmountAccessEnabled` <a name="ResetSubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```csharp
private void ResetSubmountAccessEnabled()
```

##### `ResetSuidEnabled` <a name="ResetSuidEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```csharp
private void ResetSuidEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">AnonymousGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">AnonymousUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">RootSquashEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">SubmountAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">SuidEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGid">AnonymousGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUid">AnonymousUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabled">SuidEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `AnonymousGidInput`<sup>Optional</sup> <a name="AnonymousGidInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```csharp
public double AnonymousGidInput { get; }
```

- *Type:* double

---

##### `AnonymousUidInput`<sup>Optional</sup> <a name="AnonymousUidInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```csharp
public double AnonymousUidInput { get; }
```

- *Type:* double

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `RootSquashEnabledInput`<sup>Optional</sup> <a name="RootSquashEnabledInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```csharp
public object RootSquashEnabledInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SubmountAccessEnabledInput`<sup>Optional</sup> <a name="SubmountAccessEnabledInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```csharp
public object SubmountAccessEnabledInput { get; }
```

- *Type:* object

---

##### `SuidEnabledInput`<sup>Optional</sup> <a name="SuidEnabledInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```csharp
public object SuidEnabledInput { get; }
```

- *Type:* object

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `AnonymousGid`<sup>Required</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```csharp
public double AnonymousGid { get; }
```

- *Type:* double

---

##### `AnonymousUid`<sup>Required</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```csharp
public double AnonymousUid { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `RootSquashEnabled`<sup>Required</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```csharp
public object RootSquashEnabled { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SubmountAccessEnabled`<sup>Required</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```csharp
public object SubmountAccessEnabled { get; }
```

- *Type:* object

---

##### `SuidEnabled`<sup>Required</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```csharp
public object SuidEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheAccessPolicyTimeoutsOutputReference <a name="HpcCacheAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheAccessPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



