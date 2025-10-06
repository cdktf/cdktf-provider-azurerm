# `storageAccountLocalUser` Submodule <a name="`storageAccountLocalUser` Submodule" id="@cdktf/provider-azurerm.storageAccountLocalUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountLocalUser <a name="StorageAccountLocalUser" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUser(Construct Scope, string Id, StorageAccountLocalUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig">StorageAccountLocalUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig">StorageAccountLocalUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope">PutPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey">PutSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory">ResetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope">ResetPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey">ResetSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled">ResetSshKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled">ResetSshPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermissionScope` <a name="PutPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope"></a>

```csharp
private void PutPermissionScope(IResolvable|StorageAccountLocalUserPermissionScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---

##### `PutSshAuthorizedKey` <a name="PutSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey"></a>

```csharp
private void PutSshAuthorizedKey(IResolvable|StorageAccountLocalUserSshAuthorizedKey[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountLocalUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory"></a>

```csharp
private void ResetHomeDirectory()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissionScope` <a name="ResetPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope"></a>

```csharp
private void ResetPermissionScope()
```

##### `ResetSshAuthorizedKey` <a name="ResetSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey"></a>

```csharp
private void ResetSshAuthorizedKey()
```

##### `ResetSshKeyEnabled` <a name="ResetSshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled"></a>

```csharp
private void ResetSshKeyEnabled()
```

##### `ResetSshPasswordEnabled` <a name="ResetSshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled"></a>

```csharp
private void ResetSshPasswordEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountLocalUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountLocalUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountLocalUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountLocalUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountLocalUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageAccountLocalUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountLocalUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountLocalUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountLocalUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope">PermissionScope</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey">SshAuthorizedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput">PermissionScopeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput">SshAuthorizedKeyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput">SshKeyEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput">SshPasswordEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled">SshKeyEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled">SshPasswordEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PermissionScope`<sup>Required</sup> <a name="PermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope"></a>

```csharp
public StorageAccountLocalUserPermissionScopeList PermissionScope { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a>

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `SshAuthorizedKey`<sup>Required</sup> <a name="SshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey"></a>

```csharp
public StorageAccountLocalUserSshAuthorizedKeyList SshAuthorizedKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts"></a>

```csharp
public StorageAccountLocalUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a>

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput"></a>

```csharp
public string HomeDirectoryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionScopeInput`<sup>Optional</sup> <a name="PermissionScopeInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput"></a>

```csharp
public IResolvable|StorageAccountLocalUserPermissionScope[] PermissionScopeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---

##### `SshAuthorizedKeyInput`<sup>Optional</sup> <a name="SshAuthorizedKeyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput"></a>

```csharp
public IResolvable|StorageAccountLocalUserSshAuthorizedKey[] SshAuthorizedKeyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---

##### `SshKeyEnabledInput`<sup>Optional</sup> <a name="SshKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput"></a>

```csharp
public bool|IResolvable SshKeyEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SshPasswordEnabledInput`<sup>Optional</sup> <a name="SshPasswordEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput"></a>

```csharp
public bool|IResolvable SshPasswordEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageAccountLocalUserTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SshKeyEnabled`<sup>Required</sup> <a name="SshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled"></a>

```csharp
public bool|IResolvable SshKeyEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SshPasswordEnabled`<sup>Required</sup> <a name="SshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled"></a>

```csharp
public bool|IResolvable SshPasswordEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountLocalUserConfig <a name="StorageAccountLocalUserConfig" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string StorageAccountId,
    string HomeDirectory = null,
    string Id = null,
    IResolvable|StorageAccountLocalUserPermissionScope[] PermissionScope = null,
    IResolvable|StorageAccountLocalUserSshAuthorizedKey[] SshAuthorizedKey = null,
    bool|IResolvable SshKeyEnabled = null,
    bool|IResolvable SshPasswordEnabled = null,
    StorageAccountLocalUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope">PermissionScope</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey">SshAuthorizedKey</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled">SshKeyEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled">SshPasswordEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PermissionScope`<sup>Optional</sup> <a name="PermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope"></a>

```csharp
public IResolvable|StorageAccountLocalUserPermissionScope[] PermissionScope { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `SshAuthorizedKey`<sup>Optional</sup> <a name="SshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey"></a>

```csharp
public IResolvable|StorageAccountLocalUserSshAuthorizedKey[] SshAuthorizedKey { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `SshKeyEnabled`<sup>Optional</sup> <a name="SshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled"></a>

```csharp
public bool|IResolvable SshKeyEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `SshPasswordEnabled`<sup>Optional</sup> <a name="SshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled"></a>

```csharp
public bool|IResolvable SshPasswordEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts"></a>

```csharp
public StorageAccountLocalUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

### StorageAccountLocalUserPermissionScope <a name="StorageAccountLocalUserPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserPermissionScope {
    StorageAccountLocalUserPermissionScopePermissions Permissions,
    string ResourceName,
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions"></a>

```csharp
public StorageAccountLocalUserPermissionScopePermissions Permissions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#permissions StorageAccountLocalUser#permissions}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}.

---

### StorageAccountLocalUserPermissionScopePermissions <a name="StorageAccountLocalUserPermissionScopePermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserPermissionScopePermissions {
    bool|IResolvable Create = null,
    bool|IResolvable Delete = null,
    bool|IResolvable List = null,
    bool|IResolvable Read = null,
    bool|IResolvable Write = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create">Create</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete">Delete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list">List</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read">Read</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write">Write</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create"></a>

```csharp
public bool|IResolvable Create { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list"></a>

```csharp
public bool|IResolvable List { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read"></a>

```csharp
public bool|IResolvable Read { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `Write`<sup>Optional</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write"></a>

```csharp
public bool|IResolvable Write { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}.

---

### StorageAccountLocalUserSshAuthorizedKey <a name="StorageAccountLocalUserSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserSshAuthorizedKey {
    string Key,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}.

---

### StorageAccountLocalUserTimeouts <a name="StorageAccountLocalUserTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountLocalUserPermissionScopeList <a name="StorageAccountLocalUserPermissionScopeList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserPermissionScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get"></a>

```csharp
private StorageAccountLocalUserPermissionScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountLocalUserPermissionScope[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---


### StorageAccountLocalUserPermissionScopeOutputReference <a name="StorageAccountLocalUserPermissionScopeOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserPermissionScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions">PutPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions"></a>

```csharp
private void PutPermissions(StorageAccountLocalUserPermissionScopePermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions"></a>

```csharp
public StorageAccountLocalUserPermissionScopePermissionsOutputReference Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput"></a>

```csharp
public StorageAccountLocalUserPermissionScopePermissions PermissionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountLocalUserPermissionScope InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>

---


### StorageAccountLocalUserPermissionScopePermissionsOutputReference <a name="StorageAccountLocalUserPermissionScopePermissionsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserPermissionScopePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList">ResetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite">ResetWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetList` <a name="ResetList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList"></a>

```csharp
private void ResetList()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetWrite` <a name="ResetWrite" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite"></a>

```csharp
private void ResetWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput">CreateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput">ListInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput">ReadInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput">WriteInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create">Create</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete">Delete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list">List</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read">Read</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write">Write</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput"></a>

```csharp
public bool|IResolvable CreateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput"></a>

```csharp
public bool|IResolvable DeleteInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput"></a>

```csharp
public bool|IResolvable ListInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput"></a>

```csharp
public bool|IResolvable ReadInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput"></a>

```csharp
public bool|IResolvable WriteInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create"></a>

```csharp
public bool|IResolvable Create { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list"></a>

```csharp
public bool|IResolvable List { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read"></a>

```csharp
public bool|IResolvable Read { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write"></a>

```csharp
public bool|IResolvable Write { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue"></a>

```csharp
public StorageAccountLocalUserPermissionScopePermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


### StorageAccountLocalUserSshAuthorizedKeyList <a name="StorageAccountLocalUserSshAuthorizedKeyList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserSshAuthorizedKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get"></a>

```csharp
private StorageAccountLocalUserSshAuthorizedKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountLocalUserSshAuthorizedKey[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---


### StorageAccountLocalUserSshAuthorizedKeyOutputReference <a name="StorageAccountLocalUserSshAuthorizedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserSshAuthorizedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountLocalUserSshAuthorizedKey InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>

---


### StorageAccountLocalUserTimeoutsOutputReference <a name="StorageAccountLocalUserTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountLocalUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountLocalUserTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---



