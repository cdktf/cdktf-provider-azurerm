# `managedLustreFileSystem` Submodule <a name="`managedLustreFileSystem` Submodule" id="@cdktf/provider-azurerm.managedLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedLustreFileSystem <a name="ManagedLustreFileSystem" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystem(Construct Scope, string Id, ManagedLustreFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting">PutHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting">ResetHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey"></a>

```csharp
private void PutEncryptionKey(ManagedLustreFileSystemEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `PutHsmSetting` <a name="PutHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting"></a>

```csharp
private void PutHsmSetting(ManagedLustreFileSystemHsmSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity"></a>

```csharp
private void PutIdentity(ManagedLustreFileSystemIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(ManagedLustreFileSystemMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedLustreFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetHsmSetting` <a name="ResetHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting"></a>

```csharp
private void ResetHsmSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagedLustreFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagedLustreFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagedLustreFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagedLustreFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedLustreFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting">HsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress">MgsAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput">HsmSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput">StorageCapacityInTbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb">StorageCapacityInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey"></a>

```csharp
public ManagedLustreFileSystemEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a>

---

##### `HsmSetting`<sup>Required</sup> <a name="HsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting"></a>

```csharp
public ManagedLustreFileSystemHsmSettingOutputReference HsmSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity"></a>

```csharp
public ManagedLustreFileSystemIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow"></a>

```csharp
public ManagedLustreFileSystemMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a>

---

##### `MgsAddress`<sup>Required</sup> <a name="MgsAddress" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress"></a>

```csharp
public string MgsAddress { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts"></a>

```csharp
public ManagedLustreFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a>

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput"></a>

```csharp
public ManagedLustreFileSystemEncryptionKey EncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `HsmSettingInput`<sup>Optional</sup> <a name="HsmSettingInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput"></a>

```csharp
public ManagedLustreFileSystemHsmSetting HsmSettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput"></a>

```csharp
public ManagedLustreFileSystemIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput"></a>

```csharp
public ManagedLustreFileSystemMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageCapacityInTbInput`<sup>Optional</sup> <a name="StorageCapacityInTbInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput"></a>

```csharp
public double StorageCapacityInTbInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `StorageCapacityInTb`<sup>Required</sup> <a name="StorageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb"></a>

```csharp
public double StorageCapacityInTb { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedLustreFileSystemConfig <a name="ManagedLustreFileSystemConfig" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    ManagedLustreFileSystemMaintenanceWindow MaintenanceWindow,
    string Name,
    string ResourceGroupName,
    string SkuName,
    double StorageCapacityInTb,
    string SubnetId,
    string[] Zones,
    ManagedLustreFileSystemEncryptionKey EncryptionKey = null,
    ManagedLustreFileSystemHsmSetting HsmSetting = null,
    string Id = null,
    ManagedLustreFileSystemIdentity Identity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ManagedLustreFileSystemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb">StorageCapacityInTb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting">HsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | hsm_setting block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}.

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow"></a>

```csharp
public ManagedLustreFileSystemMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}.

---

##### `StorageCapacityInTb`<sup>Required</sup> <a name="StorageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb"></a>

```csharp
public double StorageCapacityInTb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}.

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey"></a>

```csharp
public ManagedLustreFileSystemEncryptionKey EncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}

---

##### `HsmSetting`<sup>Optional</sup> <a name="HsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting"></a>

```csharp
public ManagedLustreFileSystemHsmSetting HsmSetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

hsm_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity"></a>

```csharp
public ManagedLustreFileSystemIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts"></a>

```csharp
public ManagedLustreFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}

---

### ManagedLustreFileSystemEncryptionKey <a name="ManagedLustreFileSystemEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemEncryptionKey {
    string KeyUrl,
    string SourceVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl">KeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}. |

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl"></a>

```csharp
public string KeyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}.

---

### ManagedLustreFileSystemHsmSetting <a name="ManagedLustreFileSystemHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemHsmSetting {
    string ContainerId,
    string LoggingContainerId,
    string ImportPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId">ContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId">LoggingContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix">ImportPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}.

---

##### `LoggingContainerId`<sup>Required</sup> <a name="LoggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId"></a>

```csharp
public string LoggingContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}.

---

##### `ImportPrefix`<sup>Optional</sup> <a name="ImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix"></a>

```csharp
public string ImportPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}.

---

### ManagedLustreFileSystemIdentity <a name="ManagedLustreFileSystemIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}.

---

### ManagedLustreFileSystemMaintenanceWindow <a name="ManagedLustreFileSystemMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemMaintenanceWindow {
    string DayOfWeek,
    string TimeOfDayInUtc
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc">TimeOfDayInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}.

---

##### `TimeOfDayInUtc`<sup>Required</sup> <a name="TimeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc"></a>

```csharp
public string TimeOfDayInUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}.

---

### ManagedLustreFileSystemTimeouts <a name="ManagedLustreFileSystemTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedLustreFileSystemEncryptionKeyOutputReference <a name="ManagedLustreFileSystemEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput">KeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl">KeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyUrlInput`<sup>Optional</sup> <a name="KeyUrlInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput"></a>

```csharp
public string KeyUrlInput { get; }
```

- *Type:* string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```csharp
public string SourceVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl"></a>

```csharp
public string KeyUrl { get; }
```

- *Type:* string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ManagedLustreFileSystemEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---


### ManagedLustreFileSystemHsmSettingOutputReference <a name="ManagedLustreFileSystemHsmSettingOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemHsmSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix">ResetImportPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImportPrefix` <a name="ResetImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix"></a>

```csharp
private void ResetImportPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput">ImportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput">LoggingContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix">ImportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId">LoggingContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `ImportPrefixInput`<sup>Optional</sup> <a name="ImportPrefixInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput"></a>

```csharp
public string ImportPrefixInput { get; }
```

- *Type:* string

---

##### `LoggingContainerIdInput`<sup>Optional</sup> <a name="LoggingContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput"></a>

```csharp
public string LoggingContainerIdInput { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `ImportPrefix`<sup>Required</sup> <a name="ImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix"></a>

```csharp
public string ImportPrefix { get; }
```

- *Type:* string

---

##### `LoggingContainerId`<sup>Required</sup> <a name="LoggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId"></a>

```csharp
public string LoggingContainerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue"></a>

```csharp
public ManagedLustreFileSystemHsmSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---


### ManagedLustreFileSystemIdentityOutputReference <a name="ManagedLustreFileSystemIdentityOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue"></a>

```csharp
public ManagedLustreFileSystemIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---


### ManagedLustreFileSystemMaintenanceWindowOutputReference <a name="ManagedLustreFileSystemMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput">TimeOfDayInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc">TimeOfDayInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `TimeOfDayInUtcInput`<sup>Optional</sup> <a name="TimeOfDayInUtcInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput"></a>

```csharp
public string TimeOfDayInUtcInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `TimeOfDayInUtc`<sup>Required</sup> <a name="TimeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc"></a>

```csharp
public string TimeOfDayInUtc { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public ManagedLustreFileSystemMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---


### ManagedLustreFileSystemTimeoutsOutputReference <a name="ManagedLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagedLustreFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



