# `mssqlManagedInstanceTransparentDataEncryption` Submodule <a name="`mssqlManagedInstanceTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceTransparentDataEncryption <a name="MssqlManagedInstanceTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption azurerm_mssql_managed_instance_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceTransparentDataEncryption(Construct Scope, string Id, MssqlManagedInstanceTransparentDataEncryptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig">MssqlManagedInstanceTransparentDataEncryptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig">MssqlManagedInstanceTransparentDataEncryptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetAutoRotationEnabled">ResetAutoRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlManagedInstanceTransparentDataEncryptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

---

##### `ResetAutoRotationEnabled` <a name="ResetAutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetAutoRotationEnabled"></a>

```csharp
private void ResetAutoRotationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceTransparentDataEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceTransparentDataEncryption.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceTransparentDataEncryption.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceTransparentDataEncryption.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceTransparentDataEncryption.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlManagedInstanceTransparentDataEncryption resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedInstanceTransparentDataEncryption to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedInstanceTransparentDataEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceTransparentDataEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference">MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabledInput">AutoRotationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabled">AutoRotationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeouts"></a>

```csharp
public MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference">MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `AutoRotationEnabledInput`<sup>Optional</sup> <a name="AutoRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```csharp
public object AutoRotationEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoRotationEnabled`<sup>Required</sup> <a name="AutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabled"></a>

```csharp
public object AutoRotationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceTransparentDataEncryptionConfig <a name="MssqlManagedInstanceTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceTransparentDataEncryptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    object AutoRotationEnabled = null,
    string Id = null,
    string KeyVaultKeyId = null,
    MssqlManagedInstanceTransparentDataEncryptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.autoRotationEnabled">AutoRotationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}.

---

##### `AutoRotationEnabled`<sup>Optional</sup> <a name="AutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```csharp
public object AutoRotationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.timeouts"></a>

```csharp
public MssqlManagedInstanceTransparentDataEncryptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#timeouts MssqlManagedInstanceTransparentDataEncryption#timeouts}

---

### MssqlManagedInstanceTransparentDataEncryptionTimeouts <a name="MssqlManagedInstanceTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceTransparentDataEncryptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#create MssqlManagedInstanceTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#delete MssqlManagedInstanceTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#read MssqlManagedInstanceTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#update MssqlManagedInstanceTransparentDataEncryption#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#create MssqlManagedInstanceTransparentDataEncryption#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#delete MssqlManagedInstanceTransparentDataEncryption#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#read MssqlManagedInstanceTransparentDataEncryption#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/mssql_managed_instance_transparent_data_encryption#update MssqlManagedInstanceTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



