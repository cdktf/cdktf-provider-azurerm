# `mysqlFlexibleServer` Submodule <a name="`mysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.mysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlFlexibleServer <a name="MysqlFlexibleServer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server azurerm_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServer(Construct Scope, string Id, MysqlFlexibleServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig">MysqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig">MysqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putHighAvailability">PutHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetAdministratorPassword">ResetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetBackupRetentionDays">ResetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetDelegatedSubnetId">ResetDelegatedSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetGeoRedundantBackupEnabled">ResetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetHighAvailability">ResetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetPointInTimeRestoreTimeInUtc">ResetPointInTimeRestoreTimeInUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetPrivateDnsZoneId">ResetPrivateDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetReplicationRole">ResetReplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetSourceServerId">ResetSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putCustomerManagedKey"></a>

```csharp
private void PutCustomerManagedKey(MysqlFlexibleServerCustomerManagedKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a>

---

##### `PutHighAvailability` <a name="PutHighAvailability" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putHighAvailability"></a>

```csharp
private void PutHighAvailability(MysqlFlexibleServerHighAvailability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putHighAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putIdentity"></a>

```csharp
private void PutIdentity(MysqlFlexibleServerIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(MysqlFlexibleServerMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putStorage"></a>

```csharp
private void PutStorage(MysqlFlexibleServerStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlFlexibleServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts">MysqlFlexibleServerTimeouts</a>

---

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetAdministratorLogin"></a>

```csharp
private void ResetAdministratorLogin()
```

##### `ResetAdministratorPassword` <a name="ResetAdministratorPassword" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetAdministratorPassword"></a>

```csharp
private void ResetAdministratorPassword()
```

##### `ResetBackupRetentionDays` <a name="ResetBackupRetentionDays" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetBackupRetentionDays"></a>

```csharp
private void ResetBackupRetentionDays()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetCreateMode"></a>

```csharp
private void ResetCreateMode()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDelegatedSubnetId` <a name="ResetDelegatedSubnetId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetDelegatedSubnetId"></a>

```csharp
private void ResetDelegatedSubnetId()
```

##### `ResetGeoRedundantBackupEnabled` <a name="ResetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetGeoRedundantBackupEnabled"></a>

```csharp
private void ResetGeoRedundantBackupEnabled()
```

##### `ResetHighAvailability` <a name="ResetHighAvailability" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetHighAvailability"></a>

```csharp
private void ResetHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetPointInTimeRestoreTimeInUtc` <a name="ResetPointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetPointInTimeRestoreTimeInUtc"></a>

```csharp
private void ResetPointInTimeRestoreTimeInUtc()
```

##### `ResetPrivateDnsZoneId` <a name="ResetPrivateDnsZoneId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetPrivateDnsZoneId"></a>

```csharp
private void ResetPrivateDnsZoneId()
```

##### `ResetReplicationRole` <a name="ResetReplicationRole" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetReplicationRole"></a>

```csharp
private void ResetReplicationRole()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetSourceServerId` <a name="ResetSourceServerId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetSourceServerId"></a>

```csharp
private void ResetSourceServerId()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlFlexibleServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference">MysqlFlexibleServerCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.highAvailability">HighAvailability</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference">MysqlFlexibleServerHighAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference">MysqlFlexibleServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference">MysqlFlexibleServerMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicaCapacity">ReplicaCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference">MysqlFlexibleServerStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference">MysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorPasswordInput">AdministratorPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.backupRetentionDaysInput">BackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.createModeInput">CreateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.delegatedSubnetIdInput">DelegatedSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.geoRedundantBackupEnabledInput">GeoRedundantBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.highAvailabilityInput">HighAvailabilityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput">PointInTimeRestoreTimeInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.privateDnsZoneIdInput">PrivateDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicationRoleInput">ReplicationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.sourceServerIdInput">SourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorPassword">AdministratorPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.createMode">CreateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.delegatedSubnetId">DelegatedSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.pointInTimeRestoreTimeInUtc">PointInTimeRestoreTimeInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicationRole">ReplicationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.sourceServerId">SourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.customerManagedKey"></a>

```csharp
public MysqlFlexibleServerCustomerManagedKeyOutputReference CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference">MysqlFlexibleServerCustomerManagedKeyOutputReference</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.highAvailability"></a>

```csharp
public MysqlFlexibleServerHighAvailabilityOutputReference HighAvailability { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference">MysqlFlexibleServerHighAvailabilityOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.identity"></a>

```csharp
public MysqlFlexibleServerIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference">MysqlFlexibleServerIdentityOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.maintenanceWindow"></a>

```csharp
public MysqlFlexibleServerMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference">MysqlFlexibleServerMaintenanceWindowOutputReference</a>

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReplicaCapacity`<sup>Required</sup> <a name="ReplicaCapacity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicaCapacity"></a>

```csharp
public double ReplicaCapacity { get; }
```

- *Type:* double

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.storage"></a>

```csharp
public MysqlFlexibleServerStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference">MysqlFlexibleServerStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.timeouts"></a>

```csharp
public MysqlFlexibleServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference">MysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorLoginInput"></a>

```csharp
public string AdministratorLoginInput { get; }
```

- *Type:* string

---

##### `AdministratorPasswordInput`<sup>Optional</sup> <a name="AdministratorPasswordInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorPasswordInput"></a>

```csharp
public string AdministratorPasswordInput { get; }
```

- *Type:* string

---

##### `BackupRetentionDaysInput`<sup>Optional</sup> <a name="BackupRetentionDaysInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.backupRetentionDaysInput"></a>

```csharp
public double BackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.createModeInput"></a>

```csharp
public string CreateModeInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.customerManagedKeyInput"></a>

```csharp
public MysqlFlexibleServerCustomerManagedKey CustomerManagedKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a>

---

##### `DelegatedSubnetIdInput`<sup>Optional</sup> <a name="DelegatedSubnetIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.delegatedSubnetIdInput"></a>

```csharp
public string DelegatedSubnetIdInput { get; }
```

- *Type:* string

---

##### `GeoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="GeoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.geoRedundantBackupEnabledInput"></a>

```csharp
public object GeoRedundantBackupEnabledInput { get; }
```

- *Type:* object

---

##### `HighAvailabilityInput`<sup>Optional</sup> <a name="HighAvailabilityInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.highAvailabilityInput"></a>

```csharp
public MysqlFlexibleServerHighAvailability HighAvailabilityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.identityInput"></a>

```csharp
public MysqlFlexibleServerIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.maintenanceWindowInput"></a>

```csharp
public MysqlFlexibleServerMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRestoreTimeInUtcInput`<sup>Optional</sup> <a name="PointInTimeRestoreTimeInUtcInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput"></a>

```csharp
public string PointInTimeRestoreTimeInUtcInput { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneIdInput`<sup>Optional</sup> <a name="PrivateDnsZoneIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.privateDnsZoneIdInput"></a>

```csharp
public string PrivateDnsZoneIdInput { get; }
```

- *Type:* string

---

##### `ReplicationRoleInput`<sup>Optional</sup> <a name="ReplicationRoleInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicationRoleInput"></a>

```csharp
public string ReplicationRoleInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SourceServerIdInput`<sup>Optional</sup> <a name="SourceServerIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.sourceServerIdInput"></a>

```csharp
public string SourceServerIdInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.storageInput"></a>

```csharp
public MysqlFlexibleServerStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; }
```

- *Type:* string

---

##### `AdministratorPassword`<sup>Required</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.administratorPassword"></a>

```csharp
public string AdministratorPassword { get; }
```

- *Type:* string

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; }
```

- *Type:* double

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.createMode"></a>

```csharp
public string CreateMode { get; }
```

- *Type:* string

---

##### `DelegatedSubnetId`<sup>Required</sup> <a name="DelegatedSubnetId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.delegatedSubnetId"></a>

```csharp
public string DelegatedSubnetId { get; }
```

- *Type:* string

---

##### `GeoRedundantBackupEnabled`<sup>Required</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```csharp
public object GeoRedundantBackupEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PointInTimeRestoreTimeInUtc`<sup>Required</sup> <a name="PointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.pointInTimeRestoreTimeInUtc"></a>

```csharp
public string PointInTimeRestoreTimeInUtc { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneId`<sup>Required</sup> <a name="PrivateDnsZoneId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.privateDnsZoneId"></a>

```csharp
public string PrivateDnsZoneId { get; }
```

- *Type:* string

---

##### `ReplicationRole`<sup>Required</sup> <a name="ReplicationRole" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.replicationRole"></a>

```csharp
public string ReplicationRole { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SourceServerId`<sup>Required</sup> <a name="SourceServerId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.sourceServerId"></a>

```csharp
public string SourceServerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlFlexibleServerConfig <a name="MysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string AdministratorLogin = null,
    string AdministratorPassword = null,
    double BackupRetentionDays = null,
    string CreateMode = null,
    MysqlFlexibleServerCustomerManagedKey CustomerManagedKey = null,
    string DelegatedSubnetId = null,
    object GeoRedundantBackupEnabled = null,
    MysqlFlexibleServerHighAvailability HighAvailability = null,
    string Id = null,
    MysqlFlexibleServerIdentity Identity = null,
    MysqlFlexibleServerMaintenanceWindow MaintenanceWindow = null,
    string PointInTimeRestoreTimeInUtc = null,
    string PrivateDnsZoneId = null,
    string ReplicationRole = null,
    string SkuName = null,
    string SourceServerId = null,
    MysqlFlexibleServerStorage Storage = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MysqlFlexibleServerTimeouts Timeouts = null,
    string Version = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#location MysqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#name MysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#resource_group_name MysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#administrator_login MysqlFlexibleServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.administratorPassword">AdministratorPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#administrator_password MysqlFlexibleServer#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#backup_retention_days MysqlFlexibleServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.createMode">CreateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#create_mode MysqlFlexibleServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.delegatedSubnetId">DelegatedSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#delegated_subnet_id MysqlFlexibleServer#delegated_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_redundant_backup_enabled MysqlFlexibleServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.highAvailability">HighAvailability</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a></code> | high_availability block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#id MysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc">PointInTimeRestoreTimeInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#point_in_time_restore_time_in_utc MysqlFlexibleServer#point_in_time_restore_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#private_dns_zone_id MysqlFlexibleServer#private_dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.replicationRole">ReplicationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#replication_role MysqlFlexibleServer#replication_role}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#sku_name MysqlFlexibleServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.sourceServerId">SourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#source_server_id MysqlFlexibleServer#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#tags MysqlFlexibleServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts">MysqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#version MysqlFlexibleServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#zone MysqlFlexibleServer#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#location MysqlFlexibleServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#name MysqlFlexibleServer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#resource_group_name MysqlFlexibleServer#resource_group_name}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#administrator_login MysqlFlexibleServer#administrator_login}.

---

##### `AdministratorPassword`<sup>Optional</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.administratorPassword"></a>

```csharp
public string AdministratorPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#administrator_password MysqlFlexibleServer#administrator_password}.

---

##### `BackupRetentionDays`<sup>Optional</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#backup_retention_days MysqlFlexibleServer#backup_retention_days}.

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.createMode"></a>

```csharp
public string CreateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#create_mode MysqlFlexibleServer#create_mode}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.customerManagedKey"></a>

```csharp
public MysqlFlexibleServerCustomerManagedKey CustomerManagedKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#customer_managed_key MysqlFlexibleServer#customer_managed_key}

---

##### `DelegatedSubnetId`<sup>Optional</sup> <a name="DelegatedSubnetId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.delegatedSubnetId"></a>

```csharp
public string DelegatedSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#delegated_subnet_id MysqlFlexibleServer#delegated_subnet_id}.

---

##### `GeoRedundantBackupEnabled`<sup>Optional</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.geoRedundantBackupEnabled"></a>

```csharp
public object GeoRedundantBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_redundant_backup_enabled MysqlFlexibleServer#geo_redundant_backup_enabled}.

---

##### `HighAvailability`<sup>Optional</sup> <a name="HighAvailability" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.highAvailability"></a>

```csharp
public MysqlFlexibleServerHighAvailability HighAvailability { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a>

high_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#high_availability MysqlFlexibleServer#high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#id MysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.identity"></a>

```csharp
public MysqlFlexibleServerIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#identity MysqlFlexibleServer#identity}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.maintenanceWindow"></a>

```csharp
public MysqlFlexibleServerMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#maintenance_window MysqlFlexibleServer#maintenance_window}

---

##### `PointInTimeRestoreTimeInUtc`<sup>Optional</sup> <a name="PointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc"></a>

```csharp
public string PointInTimeRestoreTimeInUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#point_in_time_restore_time_in_utc MysqlFlexibleServer#point_in_time_restore_time_in_utc}.

---

##### `PrivateDnsZoneId`<sup>Optional</sup> <a name="PrivateDnsZoneId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.privateDnsZoneId"></a>

```csharp
public string PrivateDnsZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#private_dns_zone_id MysqlFlexibleServer#private_dns_zone_id}.

---

##### `ReplicationRole`<sup>Optional</sup> <a name="ReplicationRole" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.replicationRole"></a>

```csharp
public string ReplicationRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#replication_role MysqlFlexibleServer#replication_role}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#sku_name MysqlFlexibleServer#sku_name}.

---

##### `SourceServerId`<sup>Optional</sup> <a name="SourceServerId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.sourceServerId"></a>

```csharp
public string SourceServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#source_server_id MysqlFlexibleServer#source_server_id}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.storage"></a>

```csharp
public MysqlFlexibleServerStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#storage MysqlFlexibleServer#storage}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#tags MysqlFlexibleServer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.timeouts"></a>

```csharp
public MysqlFlexibleServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts">MysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#timeouts MysqlFlexibleServer#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#version MysqlFlexibleServer#version}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#zone MysqlFlexibleServer#zone}.

---

### MysqlFlexibleServerCustomerManagedKey <a name="MysqlFlexibleServerCustomerManagedKey" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerCustomerManagedKey {
    string GeoBackupKeyVaultKeyId = null,
    string GeoBackupUserAssignedIdentityId = null,
    string KeyVaultKeyId = null,
    string PrimaryUserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.geoBackupKeyVaultKeyId">GeoBackupKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_backup_key_vault_key_id MysqlFlexibleServer#geo_backup_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.geoBackupUserAssignedIdentityId">GeoBackupUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_backup_user_assigned_identity_id MysqlFlexibleServer#geo_backup_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#key_vault_key_id MysqlFlexibleServer#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId">PrimaryUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#primary_user_assigned_identity_id MysqlFlexibleServer#primary_user_assigned_identity_id}. |

---

##### `GeoBackupKeyVaultKeyId`<sup>Optional</sup> <a name="GeoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.geoBackupKeyVaultKeyId"></a>

```csharp
public string GeoBackupKeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_backup_key_vault_key_id MysqlFlexibleServer#geo_backup_key_vault_key_id}.

---

##### `GeoBackupUserAssignedIdentityId`<sup>Optional</sup> <a name="GeoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.geoBackupUserAssignedIdentityId"></a>

```csharp
public string GeoBackupUserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#geo_backup_user_assigned_identity_id MysqlFlexibleServer#geo_backup_user_assigned_identity_id}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#key_vault_key_id MysqlFlexibleServer#key_vault_key_id}.

---

##### `PrimaryUserAssignedIdentityId`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId"></a>

```csharp
public string PrimaryUserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#primary_user_assigned_identity_id MysqlFlexibleServer#primary_user_assigned_identity_id}.

---

### MysqlFlexibleServerHighAvailability <a name="MysqlFlexibleServerHighAvailability" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerHighAvailability {
    string Mode,
    string StandbyAvailabilityZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#mode MysqlFlexibleServer#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability.property.standbyAvailabilityZone">StandbyAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#standby_availability_zone MysqlFlexibleServer#standby_availability_zone}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#mode MysqlFlexibleServer#mode}.

---

##### `StandbyAvailabilityZone`<sup>Optional</sup> <a name="StandbyAvailabilityZone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability.property.standbyAvailabilityZone"></a>

```csharp
public string StandbyAvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#standby_availability_zone MysqlFlexibleServer#standby_availability_zone}.

---

### MysqlFlexibleServerIdentity <a name="MysqlFlexibleServerIdentity" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#identity_ids MysqlFlexibleServer#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#type MysqlFlexibleServer#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#identity_ids MysqlFlexibleServer#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#type MysqlFlexibleServer#type}.

---

### MysqlFlexibleServerMaintenanceWindow <a name="MysqlFlexibleServerMaintenanceWindow" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerMaintenanceWindow {
    double DayOfWeek = null,
    double StartHour = null,
    double StartMinute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#day_of_week MysqlFlexibleServer#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.startHour">StartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#start_hour MysqlFlexibleServer#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.startMinute">StartMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#start_minute MysqlFlexibleServer#start_minute}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#day_of_week MysqlFlexibleServer#day_of_week}.

---

##### `StartHour`<sup>Optional</sup> <a name="StartHour" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.startHour"></a>

```csharp
public double StartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#start_hour MysqlFlexibleServer#start_hour}.

---

##### `StartMinute`<sup>Optional</sup> <a name="StartMinute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow.property.startMinute"></a>

```csharp
public double StartMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#start_minute MysqlFlexibleServer#start_minute}.

---

### MysqlFlexibleServerStorage <a name="MysqlFlexibleServerStorage" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerStorage {
    object AutoGrowEnabled = null,
    double Iops = null,
    object IoScalingEnabled = null,
    double SizeGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#auto_grow_enabled MysqlFlexibleServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#iops MysqlFlexibleServer#iops}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.ioScalingEnabled">IoScalingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#io_scaling_enabled MysqlFlexibleServer#io_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.sizeGb">SizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#size_gb MysqlFlexibleServer#size_gb}. |

---

##### `AutoGrowEnabled`<sup>Optional</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.autoGrowEnabled"></a>

```csharp
public object AutoGrowEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#auto_grow_enabled MysqlFlexibleServer#auto_grow_enabled}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#iops MysqlFlexibleServer#iops}.

---

##### `IoScalingEnabled`<sup>Optional</sup> <a name="IoScalingEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.ioScalingEnabled"></a>

```csharp
public object IoScalingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#io_scaling_enabled MysqlFlexibleServer#io_scaling_enabled}.

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#size_gb MysqlFlexibleServer#size_gb}.

---

### MysqlFlexibleServerTimeouts <a name="MysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#create MysqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#delete MysqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#read MysqlFlexibleServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#update MysqlFlexibleServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#create MysqlFlexibleServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#delete MysqlFlexibleServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#read MysqlFlexibleServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mysql_flexible_server#update MysqlFlexibleServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlFlexibleServerCustomerManagedKeyOutputReference <a name="MysqlFlexibleServerCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupKeyVaultKeyId">ResetGeoBackupKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupUserAssignedIdentityId">ResetGeoBackupUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId">ResetPrimaryUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeoBackupKeyVaultKeyId` <a name="ResetGeoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupKeyVaultKeyId"></a>

```csharp
private void ResetGeoBackupKeyVaultKeyId()
```

##### `ResetGeoBackupUserAssignedIdentityId` <a name="ResetGeoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupUserAssignedIdentityId"></a>

```csharp
private void ResetGeoBackupUserAssignedIdentityId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetPrimaryUserAssignedIdentityId` <a name="ResetPrimaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId"></a>

```csharp
private void ResetPrimaryUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyIdInput">GeoBackupKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityIdInput">GeoBackupUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput">PrimaryUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyId">GeoBackupKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityId">GeoBackupUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId">PrimaryUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoBackupKeyVaultKeyIdInput`<sup>Optional</sup> <a name="GeoBackupKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyIdInput"></a>

```csharp
public string GeoBackupKeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `GeoBackupUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="GeoBackupUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityIdInput"></a>

```csharp
public string GeoBackupUserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `PrimaryUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput"></a>

```csharp
public string PrimaryUserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `GeoBackupKeyVaultKeyId`<sup>Required</sup> <a name="GeoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyId"></a>

```csharp
public string GeoBackupKeyVaultKeyId { get; }
```

- *Type:* string

---

##### `GeoBackupUserAssignedIdentityId`<sup>Required</sup> <a name="GeoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityId"></a>

```csharp
public string GeoBackupUserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `PrimaryUserAssignedIdentityId`<sup>Required</sup> <a name="PrimaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId"></a>

```csharp
public string PrimaryUserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public MysqlFlexibleServerCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerCustomerManagedKey">MysqlFlexibleServerCustomerManagedKey</a>

---


### MysqlFlexibleServerHighAvailabilityOutputReference <a name="MysqlFlexibleServerHighAvailabilityOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerHighAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone">ResetStandbyAvailabilityZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStandbyAvailabilityZone` <a name="ResetStandbyAvailabilityZone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone"></a>

```csharp
private void ResetStandbyAvailabilityZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput">StandbyAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">StandbyAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StandbyAvailabilityZoneInput`<sup>Optional</sup> <a name="StandbyAvailabilityZoneInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput"></a>

```csharp
public string StandbyAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StandbyAvailabilityZone`<sup>Required</sup> <a name="StandbyAvailabilityZone" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```csharp
public string StandbyAvailabilityZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```csharp
public MysqlFlexibleServerHighAvailability InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerHighAvailability">MysqlFlexibleServerHighAvailability</a>

---


### MysqlFlexibleServerIdentityOutputReference <a name="MysqlFlexibleServerIdentityOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentityOutputReference.property.internalValue"></a>

```csharp
public MysqlFlexibleServerIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerIdentity">MysqlFlexibleServerIdentity</a>

---


### MysqlFlexibleServerMaintenanceWindowOutputReference <a name="MysqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour">ResetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute">ResetStartMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetStartHour` <a name="ResetStartHour" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour"></a>

```csharp
private void ResetStartHour()
```

##### `ResetStartMinute` <a name="ResetStartMinute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute"></a>

```csharp
private void ResetStartMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput">StartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput">StartMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">StartMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```csharp
public double DayOfWeekInput { get; }
```

- *Type:* double

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput"></a>

```csharp
public double StartHourInput { get; }
```

- *Type:* double

---

##### `StartMinuteInput`<sup>Optional</sup> <a name="StartMinuteInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```csharp
public double StartMinuteInput { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; }
```

- *Type:* double

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `StartMinute`<sup>Required</sup> <a name="StartMinute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```csharp
public double StartMinute { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public MysqlFlexibleServerMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerMaintenanceWindow">MysqlFlexibleServerMaintenanceWindow</a>

---


### MysqlFlexibleServerStorageOutputReference <a name="MysqlFlexibleServerStorageOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetAutoGrowEnabled">ResetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetIoScalingEnabled">ResetIoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoGrowEnabled` <a name="ResetAutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetAutoGrowEnabled"></a>

```csharp
private void ResetAutoGrowEnabled()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetIoScalingEnabled` <a name="ResetIoScalingEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetIoScalingEnabled"></a>

```csharp
private void ResetIoScalingEnabled()
```

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.resetSizeGb"></a>

```csharp
private void ResetSizeGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.autoGrowEnabledInput">AutoGrowEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.ioScalingEnabledInput">IoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled">IoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoGrowEnabledInput`<sup>Optional</sup> <a name="AutoGrowEnabledInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.autoGrowEnabledInput"></a>

```csharp
public object AutoGrowEnabledInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `IoScalingEnabledInput`<sup>Optional</sup> <a name="IoScalingEnabledInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.ioScalingEnabledInput"></a>

```csharp
public object IoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `AutoGrowEnabled`<sup>Required</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled"></a>

```csharp
public object AutoGrowEnabled { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `IoScalingEnabled`<sup>Required</sup> <a name="IoScalingEnabled" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled"></a>

```csharp
public object IoScalingEnabled { get; }
```

- *Type:* object

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorageOutputReference.property.internalValue"></a>

```csharp
public MysqlFlexibleServerStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerStorage">MysqlFlexibleServerStorage</a>

---


### MysqlFlexibleServerTimeoutsOutputReference <a name="MysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServer.MysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



