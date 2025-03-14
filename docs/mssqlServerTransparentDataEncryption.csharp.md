# `mssqlServerTransparentDataEncryption` Submodule <a name="`mssqlServerTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerTransparentDataEncryption <a name="MssqlServerTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption azurerm_mssql_server_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerTransparentDataEncryption(Construct Scope, string Id, MssqlServerTransparentDataEncryptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig">MssqlServerTransparentDataEncryptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig">MssqlServerTransparentDataEncryptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled">ResetAutoRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetManagedHsmKeyId">ResetManagedHsmKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlServerTransparentDataEncryptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---

##### `ResetAutoRotationEnabled` <a name="ResetAutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled"></a>

```csharp
private void ResetAutoRotationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetManagedHsmKeyId` <a name="ResetManagedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetManagedHsmKeyId"></a>

```csharp
private void ResetManagedHsmKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerTransparentDataEncryption.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerTransparentDataEncryption.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerTransparentDataEncryption.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerTransparentDataEncryption.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlServerTransparentDataEncryption to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlServerTransparentDataEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerTransparentDataEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput">AutoRotationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyIdInput">ManagedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled">AutoRotationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts"></a>

```csharp
public MssqlServerTransparentDataEncryptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `AutoRotationEnabledInput`<sup>Optional</sup> <a name="AutoRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```csharp
public object AutoRotationEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyIdInput`<sup>Optional</sup> <a name="ManagedHsmKeyIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyIdInput"></a>

```csharp
public string ManagedHsmKeyIdInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoRotationEnabled`<sup>Required</sup> <a name="AutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled"></a>

```csharp
public object AutoRotationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyId`<sup>Required</sup> <a name="ManagedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerTransparentDataEncryptionConfig <a name="MssqlServerTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerTransparentDataEncryptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServerId,
    object AutoRotationEnabled = null,
    string Id = null,
    string KeyVaultKeyId = null,
    string ManagedHsmKeyId = null,
    MssqlServerTransparentDataEncryptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled">AutoRotationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#managed_hsm_key_id MssqlServerTransparentDataEncryption#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `AutoRotationEnabled`<sup>Optional</sup> <a name="AutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```csharp
public object AutoRotationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `ManagedHsmKeyId`<sup>Optional</sup> <a name="ManagedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#managed_hsm_key_id MssqlServerTransparentDataEncryption#managed_hsm_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts"></a>

```csharp
public MssqlServerTransparentDataEncryptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

### MssqlServerTransparentDataEncryptionTimeouts <a name="MssqlServerTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerTransparentDataEncryptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlServerTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerTransparentDataEncryptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



