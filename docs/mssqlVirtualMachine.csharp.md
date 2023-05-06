# `azurerm_mssql_virtual_machine`

Refer to the Terraform Registory for docs: [`azurerm_mssql_virtual_machine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine).

# `mssqlVirtualMachine` Submodule <a name="`mssqlVirtualMachine` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachine <a name="MssqlVirtualMachine" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine azurerm_mssql_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachine(Construct Scope, string Id, MssqlVirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig">MssqlVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig">MssqlVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment">PutAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup">PutAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching">PutAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential">PutKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance">PutSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration">PutStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAssessment">ResetAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoBackup">ResetAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoPatching">ResetAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetKeyVaultCredential">ResetKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetRServicesEnabled">ResetRServicesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityPort">ResetSqlConnectivityPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityType">ResetSqlConnectivityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdatePassword">ResetSqlConnectivityUpdatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdateUsername">ResetSqlConnectivityUpdateUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlInstance">ResetSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlLicenseType">ResetSqlLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetStorageConfiguration">ResetStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAssessment` <a name="PutAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment"></a>

```csharp
private void PutAssessment(MssqlVirtualMachineAssessment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---

##### `PutAutoBackup` <a name="PutAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup"></a>

```csharp
private void PutAutoBackup(MssqlVirtualMachineAutoBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---

##### `PutAutoPatching` <a name="PutAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching"></a>

```csharp
private void PutAutoPatching(MssqlVirtualMachineAutoPatching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---

##### `PutKeyVaultCredential` <a name="PutKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential"></a>

```csharp
private void PutKeyVaultCredential(MssqlVirtualMachineKeyVaultCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---

##### `PutSqlInstance` <a name="PutSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance"></a>

```csharp
private void PutSqlInstance(MssqlVirtualMachineSqlInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---

##### `PutStorageConfiguration` <a name="PutStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration"></a>

```csharp
private void PutStorageConfiguration(MssqlVirtualMachineStorageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlVirtualMachineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a>

---

##### `ResetAssessment` <a name="ResetAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAssessment"></a>

```csharp
private void ResetAssessment()
```

##### `ResetAutoBackup` <a name="ResetAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoBackup"></a>

```csharp
private void ResetAutoBackup()
```

##### `ResetAutoPatching` <a name="ResetAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoPatching"></a>

```csharp
private void ResetAutoPatching()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVaultCredential` <a name="ResetKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetKeyVaultCredential"></a>

```csharp
private void ResetKeyVaultCredential()
```

##### `ResetRServicesEnabled` <a name="ResetRServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetRServicesEnabled"></a>

```csharp
private void ResetRServicesEnabled()
```

##### `ResetSqlConnectivityPort` <a name="ResetSqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityPort"></a>

```csharp
private void ResetSqlConnectivityPort()
```

##### `ResetSqlConnectivityType` <a name="ResetSqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityType"></a>

```csharp
private void ResetSqlConnectivityType()
```

##### `ResetSqlConnectivityUpdatePassword` <a name="ResetSqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdatePassword"></a>

```csharp
private void ResetSqlConnectivityUpdatePassword()
```

##### `ResetSqlConnectivityUpdateUsername` <a name="ResetSqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdateUsername"></a>

```csharp
private void ResetSqlConnectivityUpdateUsername()
```

##### `ResetSqlInstance` <a name="ResetSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlInstance"></a>

```csharp
private void ResetSqlInstance()
```

##### `ResetSqlLicenseType` <a name="ResetSqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlLicenseType"></a>

```csharp
private void ResetSqlLicenseType()
```

##### `ResetStorageConfiguration` <a name="ResetStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetStorageConfiguration"></a>

```csharp
private void ResetStorageConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlVirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessment">Assessment</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference">MssqlVirtualMachineAssessmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackup">AutoBackup</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference">MssqlVirtualMachineAutoBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatching">AutoPatching</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference">MssqlVirtualMachineAutoPatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredential">KeyVaultCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference">MssqlVirtualMachineKeyVaultCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstance">SqlInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference">MssqlVirtualMachineSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference">MssqlVirtualMachineStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference">MssqlVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessmentInput">AssessmentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackupInput">AutoBackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatchingInput">AutoPatchingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredentialInput">KeyVaultCredentialInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabledInput">RServicesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPortInput">SqlConnectivityPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityTypeInput">SqlConnectivityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePasswordInput">SqlConnectivityUpdatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsernameInput">SqlConnectivityUpdateUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstanceInput">SqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseTypeInput">SqlLicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfigurationInput">StorageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabled">RServicesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPort">SqlConnectivityPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityType">SqlConnectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePassword">SqlConnectivityUpdatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsername">SqlConnectivityUpdateUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseType">SqlLicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Assessment`<sup>Required</sup> <a name="Assessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessment"></a>

```csharp
public MssqlVirtualMachineAssessmentOutputReference Assessment { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference">MssqlVirtualMachineAssessmentOutputReference</a>

---

##### `AutoBackup`<sup>Required</sup> <a name="AutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackup"></a>

```csharp
public MssqlVirtualMachineAutoBackupOutputReference AutoBackup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference">MssqlVirtualMachineAutoBackupOutputReference</a>

---

##### `AutoPatching`<sup>Required</sup> <a name="AutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatching"></a>

```csharp
public MssqlVirtualMachineAutoPatchingOutputReference AutoPatching { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference">MssqlVirtualMachineAutoPatchingOutputReference</a>

---

##### `KeyVaultCredential`<sup>Required</sup> <a name="KeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredential"></a>

```csharp
public MssqlVirtualMachineKeyVaultCredentialOutputReference KeyVaultCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference">MssqlVirtualMachineKeyVaultCredentialOutputReference</a>

---

##### `SqlInstance`<sup>Required</sup> <a name="SqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstance"></a>

```csharp
public MssqlVirtualMachineSqlInstanceOutputReference SqlInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference">MssqlVirtualMachineSqlInstanceOutputReference</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfiguration"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationOutputReference StorageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference">MssqlVirtualMachineStorageConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeouts"></a>

```csharp
public MssqlVirtualMachineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference">MssqlVirtualMachineTimeoutsOutputReference</a>

---

##### `AssessmentInput`<sup>Optional</sup> <a name="AssessmentInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessmentInput"></a>

```csharp
public MssqlVirtualMachineAssessment AssessmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---

##### `AutoBackupInput`<sup>Optional</sup> <a name="AutoBackupInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackupInput"></a>

```csharp
public MssqlVirtualMachineAutoBackup AutoBackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---

##### `AutoPatchingInput`<sup>Optional</sup> <a name="AutoPatchingInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatchingInput"></a>

```csharp
public MssqlVirtualMachineAutoPatching AutoPatchingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultCredentialInput`<sup>Optional</sup> <a name="KeyVaultCredentialInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredentialInput"></a>

```csharp
public MssqlVirtualMachineKeyVaultCredential KeyVaultCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---

##### `RServicesEnabledInput`<sup>Optional</sup> <a name="RServicesEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabledInput"></a>

```csharp
public object RServicesEnabledInput { get; }
```

- *Type:* object

---

##### `SqlConnectivityPortInput`<sup>Optional</sup> <a name="SqlConnectivityPortInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPortInput"></a>

```csharp
public double SqlConnectivityPortInput { get; }
```

- *Type:* double

---

##### `SqlConnectivityTypeInput`<sup>Optional</sup> <a name="SqlConnectivityTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityTypeInput"></a>

```csharp
public string SqlConnectivityTypeInput { get; }
```

- *Type:* string

---

##### `SqlConnectivityUpdatePasswordInput`<sup>Optional</sup> <a name="SqlConnectivityUpdatePasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePasswordInput"></a>

```csharp
public string SqlConnectivityUpdatePasswordInput { get; }
```

- *Type:* string

---

##### `SqlConnectivityUpdateUsernameInput`<sup>Optional</sup> <a name="SqlConnectivityUpdateUsernameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsernameInput"></a>

```csharp
public string SqlConnectivityUpdateUsernameInput { get; }
```

- *Type:* string

---

##### `SqlInstanceInput`<sup>Optional</sup> <a name="SqlInstanceInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstanceInput"></a>

```csharp
public MssqlVirtualMachineSqlInstance SqlInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---

##### `SqlLicenseTypeInput`<sup>Optional</sup> <a name="SqlLicenseTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseTypeInput"></a>

```csharp
public string SqlLicenseTypeInput { get; }
```

- *Type:* string

---

##### `StorageConfigurationInput`<sup>Optional</sup> <a name="StorageConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfigurationInput"></a>

```csharp
public MssqlVirtualMachineStorageConfiguration StorageConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RServicesEnabled`<sup>Required</sup> <a name="RServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabled"></a>

```csharp
public object RServicesEnabled { get; }
```

- *Type:* object

---

##### `SqlConnectivityPort`<sup>Required</sup> <a name="SqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPort"></a>

```csharp
public double SqlConnectivityPort { get; }
```

- *Type:* double

---

##### `SqlConnectivityType`<sup>Required</sup> <a name="SqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityType"></a>

```csharp
public string SqlConnectivityType { get; }
```

- *Type:* string

---

##### `SqlConnectivityUpdatePassword`<sup>Required</sup> <a name="SqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePassword"></a>

```csharp
public string SqlConnectivityUpdatePassword { get; }
```

- *Type:* string

---

##### `SqlConnectivityUpdateUsername`<sup>Required</sup> <a name="SqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsername"></a>

```csharp
public string SqlConnectivityUpdateUsername { get; }
```

- *Type:* string

---

##### `SqlLicenseType`<sup>Required</sup> <a name="SqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseType"></a>

```csharp
public string SqlLicenseType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineAssessment <a name="MssqlVirtualMachineAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAssessment {
    object Enabled = null,
    object RunImmediately = null,
    MssqlVirtualMachineAssessmentSchedule Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#enabled MssqlVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.runImmediately">RunImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#run_immediately MssqlVirtualMachine#run_immediately}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | schedule block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#enabled MssqlVirtualMachine#enabled}.

---

##### `RunImmediately`<sup>Optional</sup> <a name="RunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.runImmediately"></a>

```csharp
public object RunImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#run_immediately MssqlVirtualMachine#run_immediately}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.schedule"></a>

```csharp
public MssqlVirtualMachineAssessmentSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#schedule MssqlVirtualMachine#schedule}

---

### MssqlVirtualMachineAssessmentSchedule <a name="MssqlVirtualMachineAssessmentSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAssessmentSchedule {
    string DayOfWeek,
    string StartTime,
    double MonthlyOccurrence = null,
    double WeeklyInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#start_time MssqlVirtualMachine#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#monthly_occurrence MssqlVirtualMachine#monthly_occurrence}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.weeklyInterval">WeeklyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#weekly_interval MssqlVirtualMachine#weekly_interval}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#start_time MssqlVirtualMachine#start_time}.

---

##### `MonthlyOccurrence`<sup>Optional</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.monthlyOccurrence"></a>

```csharp
public double MonthlyOccurrence { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#monthly_occurrence MssqlVirtualMachine#monthly_occurrence}.

---

##### `WeeklyInterval`<sup>Optional</sup> <a name="WeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.weeklyInterval"></a>

```csharp
public double WeeklyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#weekly_interval MssqlVirtualMachine#weekly_interval}.

---

### MssqlVirtualMachineAutoBackup <a name="MssqlVirtualMachineAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoBackup {
    double RetentionPeriodInDays,
    string StorageAccountAccessKey,
    string StorageBlobEndpoint,
    object EncryptionEnabled = null,
    string EncryptionPassword = null,
    MssqlVirtualMachineAutoBackupManualSchedule ManualSchedule = null,
    object SystemDatabasesBackupEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageBlobEndpoint">StorageBlobEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionEnabled">EncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#encryption_enabled MssqlVirtualMachine#encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionPassword">EncryptionPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#encryption_password MssqlVirtualMachine#encryption_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.manualSchedule">ManualSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | manual_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.systemDatabasesBackupEnabled">SystemDatabasesBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}. |

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}.

---

##### `StorageBlobEndpoint`<sup>Required</sup> <a name="StorageBlobEndpoint" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageBlobEndpoint"></a>

```csharp
public string StorageBlobEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}.

---

##### `EncryptionEnabled`<sup>Optional</sup> <a name="EncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionEnabled"></a>

```csharp
public object EncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#encryption_enabled MssqlVirtualMachine#encryption_enabled}.

---

##### `EncryptionPassword`<sup>Optional</sup> <a name="EncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionPassword"></a>

```csharp
public string EncryptionPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#encryption_password MssqlVirtualMachine#encryption_password}.

---

##### `ManualSchedule`<sup>Optional</sup> <a name="ManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.manualSchedule"></a>

```csharp
public MssqlVirtualMachineAutoBackupManualSchedule ManualSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

manual_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#manual_schedule MssqlVirtualMachine#manual_schedule}

---

##### `SystemDatabasesBackupEnabled`<sup>Optional</sup> <a name="SystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.systemDatabasesBackupEnabled"></a>

```csharp
public object SystemDatabasesBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}.

---

### MssqlVirtualMachineAutoBackupManualSchedule <a name="MssqlVirtualMachineAutoBackupManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoBackupManualSchedule {
    string FullBackupFrequency,
    double FullBackupStartHour,
    double FullBackupWindowInHours,
    double LogBackupFrequencyInMinutes,
    string[] DaysOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupFrequency">FullBackupFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupStartHour">FullBackupStartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupWindowInHours">FullBackupWindowInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.logBackupFrequencyInMinutes">LogBackupFrequencyInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#days_of_week MssqlVirtualMachine#days_of_week}. |

---

##### `FullBackupFrequency`<sup>Required</sup> <a name="FullBackupFrequency" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupFrequency"></a>

```csharp
public string FullBackupFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}.

---

##### `FullBackupStartHour`<sup>Required</sup> <a name="FullBackupStartHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupStartHour"></a>

```csharp
public double FullBackupStartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}.

---

##### `FullBackupWindowInHours`<sup>Required</sup> <a name="FullBackupWindowInHours" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupWindowInHours"></a>

```csharp
public double FullBackupWindowInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}.

---

##### `LogBackupFrequencyInMinutes`<sup>Required</sup> <a name="LogBackupFrequencyInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.logBackupFrequencyInMinutes"></a>

```csharp
public double LogBackupFrequencyInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#days_of_week MssqlVirtualMachine#days_of_week}.

---

### MssqlVirtualMachineAutoPatching <a name="MssqlVirtualMachineAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoPatching {
    string DayOfWeek,
    double MaintenanceWindowDurationInMinutes,
    double MaintenanceWindowStartingHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowDurationInMinutes">MaintenanceWindowDurationInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowStartingHour">MaintenanceWindowStartingHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}.

---

##### `MaintenanceWindowDurationInMinutes`<sup>Required</sup> <a name="MaintenanceWindowDurationInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowDurationInMinutes"></a>

```csharp
public double MaintenanceWindowDurationInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}.

---

##### `MaintenanceWindowStartingHour`<sup>Required</sup> <a name="MaintenanceWindowStartingHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowStartingHour"></a>

```csharp
public double MaintenanceWindowStartingHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}.

---

### MssqlVirtualMachineConfig <a name="MssqlVirtualMachineConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualMachineId,
    MssqlVirtualMachineAssessment Assessment = null,
    MssqlVirtualMachineAutoBackup AutoBackup = null,
    MssqlVirtualMachineAutoPatching AutoPatching = null,
    string Id = null,
    MssqlVirtualMachineKeyVaultCredential KeyVaultCredential = null,
    object RServicesEnabled = null,
    double SqlConnectivityPort = null,
    string SqlConnectivityType = null,
    string SqlConnectivityUpdatePassword = null,
    string SqlConnectivityUpdateUsername = null,
    MssqlVirtualMachineSqlInstance SqlInstance = null,
    string SqlLicenseType = null,
    MssqlVirtualMachineStorageConfiguration StorageConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MssqlVirtualMachineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.assessment">Assessment</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | assessment block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoBackup">AutoBackup</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | auto_backup block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoPatching">AutoPatching</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | auto_patching block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#id MssqlVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.keyVaultCredential">KeyVaultCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | key_vault_credential block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.rServicesEnabled">RServicesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#r_services_enabled MssqlVirtualMachine#r_services_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityPort">SqlConnectivityPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityType">SqlConnectivityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdatePassword">SqlConnectivityUpdatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdateUsername">SqlConnectivityUpdateUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlInstance">SqlInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | sql_instance block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlLicenseType">SqlLicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_license_type MssqlVirtualMachine#sql_license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | storage_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#tags MssqlVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}.

---

##### `Assessment`<sup>Optional</sup> <a name="Assessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.assessment"></a>

```csharp
public MssqlVirtualMachineAssessment Assessment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

assessment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#assessment MssqlVirtualMachine#assessment}

---

##### `AutoBackup`<sup>Optional</sup> <a name="AutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoBackup"></a>

```csharp
public MssqlVirtualMachineAutoBackup AutoBackup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

auto_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#auto_backup MssqlVirtualMachine#auto_backup}

---

##### `AutoPatching`<sup>Optional</sup> <a name="AutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoPatching"></a>

```csharp
public MssqlVirtualMachineAutoPatching AutoPatching { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

auto_patching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#auto_patching MssqlVirtualMachine#auto_patching}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#id MssqlVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultCredential`<sup>Optional</sup> <a name="KeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.keyVaultCredential"></a>

```csharp
public MssqlVirtualMachineKeyVaultCredential KeyVaultCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

key_vault_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#key_vault_credential MssqlVirtualMachine#key_vault_credential}

---

##### `RServicesEnabled`<sup>Optional</sup> <a name="RServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.rServicesEnabled"></a>

```csharp
public object RServicesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#r_services_enabled MssqlVirtualMachine#r_services_enabled}.

---

##### `SqlConnectivityPort`<sup>Optional</sup> <a name="SqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityPort"></a>

```csharp
public double SqlConnectivityPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}.

---

##### `SqlConnectivityType`<sup>Optional</sup> <a name="SqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityType"></a>

```csharp
public string SqlConnectivityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}.

---

##### `SqlConnectivityUpdatePassword`<sup>Optional</sup> <a name="SqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdatePassword"></a>

```csharp
public string SqlConnectivityUpdatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}.

---

##### `SqlConnectivityUpdateUsername`<sup>Optional</sup> <a name="SqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdateUsername"></a>

```csharp
public string SqlConnectivityUpdateUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}.

---

##### `SqlInstance`<sup>Optional</sup> <a name="SqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlInstance"></a>

```csharp
public MssqlVirtualMachineSqlInstance SqlInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_instance MssqlVirtualMachine#sql_instance}

---

##### `SqlLicenseType`<sup>Optional</sup> <a name="SqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlLicenseType"></a>

```csharp
public string SqlLicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#sql_license_type MssqlVirtualMachine#sql_license_type}.

---

##### `StorageConfiguration`<sup>Optional</sup> <a name="StorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.storageConfiguration"></a>

```csharp
public MssqlVirtualMachineStorageConfiguration StorageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_configuration MssqlVirtualMachine#storage_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#tags MssqlVirtualMachine#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.timeouts"></a>

```csharp
public MssqlVirtualMachineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#timeouts MssqlVirtualMachine#timeouts}

---

### MssqlVirtualMachineKeyVaultCredential <a name="MssqlVirtualMachineKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineKeyVaultCredential {
    string KeyVaultUrl,
    string Name,
    string ServicePrincipalName,
    string ServicePrincipalSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.keyVaultUrl">KeyVaultUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#key_vault_url MssqlVirtualMachine#key_vault_url}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#name MssqlVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#service_principal_name MssqlVirtualMachine#service_principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalSecret">ServicePrincipalSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#service_principal_secret MssqlVirtualMachine#service_principal_secret}. |

---

##### `KeyVaultUrl`<sup>Required</sup> <a name="KeyVaultUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.keyVaultUrl"></a>

```csharp
public string KeyVaultUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#key_vault_url MssqlVirtualMachine#key_vault_url}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#name MssqlVirtualMachine#name}.

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#service_principal_name MssqlVirtualMachine#service_principal_name}.

---

##### `ServicePrincipalSecret`<sup>Required</sup> <a name="ServicePrincipalSecret" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalSecret"></a>

```csharp
public string ServicePrincipalSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#service_principal_secret MssqlVirtualMachine#service_principal_secret}.

---

### MssqlVirtualMachineSqlInstance <a name="MssqlVirtualMachineSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineSqlInstance {
    object AdhocWorkloadsOptimizationEnabled = null,
    string Collation = null,
    object InstantFileInitializationEnabled = null,
    object LockPagesInMemoryEnabled = null,
    double MaxDop = null,
    double MaxServerMemoryMb = null,
    double MinServerMemoryMb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.adhocWorkloadsOptimizationEnabled">AdhocWorkloadsOptimizationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#adhoc_workloads_optimization_enabled MssqlVirtualMachine#adhoc_workloads_optimization_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.collation">Collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#collation MssqlVirtualMachine#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.instantFileInitializationEnabled">InstantFileInitializationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#instant_file_initialization_enabled MssqlVirtualMachine#instant_file_initialization_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.lockPagesInMemoryEnabled">LockPagesInMemoryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#lock_pages_in_memory_enabled MssqlVirtualMachine#lock_pages_in_memory_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxDop">MaxDop</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#max_dop MssqlVirtualMachine#max_dop}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxServerMemoryMb">MaxServerMemoryMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#max_server_memory_mb MssqlVirtualMachine#max_server_memory_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.minServerMemoryMb">MinServerMemoryMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#min_server_memory_mb MssqlVirtualMachine#min_server_memory_mb}. |

---

##### `AdhocWorkloadsOptimizationEnabled`<sup>Optional</sup> <a name="AdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.adhocWorkloadsOptimizationEnabled"></a>

```csharp
public object AdhocWorkloadsOptimizationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#adhoc_workloads_optimization_enabled MssqlVirtualMachine#adhoc_workloads_optimization_enabled}.

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.collation"></a>

```csharp
public string Collation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#collation MssqlVirtualMachine#collation}.

---

##### `InstantFileInitializationEnabled`<sup>Optional</sup> <a name="InstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.instantFileInitializationEnabled"></a>

```csharp
public object InstantFileInitializationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#instant_file_initialization_enabled MssqlVirtualMachine#instant_file_initialization_enabled}.

---

##### `LockPagesInMemoryEnabled`<sup>Optional</sup> <a name="LockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.lockPagesInMemoryEnabled"></a>

```csharp
public object LockPagesInMemoryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#lock_pages_in_memory_enabled MssqlVirtualMachine#lock_pages_in_memory_enabled}.

---

##### `MaxDop`<sup>Optional</sup> <a name="MaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxDop"></a>

```csharp
public double MaxDop { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#max_dop MssqlVirtualMachine#max_dop}.

---

##### `MaxServerMemoryMb`<sup>Optional</sup> <a name="MaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxServerMemoryMb"></a>

```csharp
public double MaxServerMemoryMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#max_server_memory_mb MssqlVirtualMachine#max_server_memory_mb}.

---

##### `MinServerMemoryMb`<sup>Optional</sup> <a name="MinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.minServerMemoryMb"></a>

```csharp
public double MinServerMemoryMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#min_server_memory_mb MssqlVirtualMachine#min_server_memory_mb}.

---

### MssqlVirtualMachineStorageConfiguration <a name="MssqlVirtualMachineStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfiguration {
    string DiskType,
    string StorageWorkloadType,
    MssqlVirtualMachineStorageConfigurationDataSettings DataSettings = null,
    MssqlVirtualMachineStorageConfigurationLogSettings LogSettings = null,
    object SystemDbOnDataDiskEnabled = null,
    MssqlVirtualMachineStorageConfigurationTempDbSettings TempDbSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.diskType">DiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#disk_type MssqlVirtualMachine#disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.storageWorkloadType">StorageWorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_workload_type MssqlVirtualMachine#storage_workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.dataSettings">DataSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | data_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.logSettings">LogSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | log_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.systemDbOnDataDiskEnabled">SystemDbOnDataDiskEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#system_db_on_data_disk_enabled MssqlVirtualMachine#system_db_on_data_disk_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.tempDbSettings">TempDbSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | temp_db_settings block. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#disk_type MssqlVirtualMachine#disk_type}.

---

##### `StorageWorkloadType`<sup>Required</sup> <a name="StorageWorkloadType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.storageWorkloadType"></a>

```csharp
public string StorageWorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#storage_workload_type MssqlVirtualMachine#storage_workload_type}.

---

##### `DataSettings`<sup>Optional</sup> <a name="DataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.dataSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationDataSettings DataSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

data_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_settings MssqlVirtualMachine#data_settings}

---

##### `LogSettings`<sup>Optional</sup> <a name="LogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.logSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationLogSettings LogSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

log_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_settings MssqlVirtualMachine#log_settings}

---

##### `SystemDbOnDataDiskEnabled`<sup>Optional</sup> <a name="SystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.systemDbOnDataDiskEnabled"></a>

```csharp
public object SystemDbOnDataDiskEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#system_db_on_data_disk_enabled MssqlVirtualMachine#system_db_on_data_disk_enabled}.

---

##### `TempDbSettings`<sup>Optional</sup> <a name="TempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.tempDbSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationTempDbSettings TempDbSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

temp_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#temp_db_settings MssqlVirtualMachine#temp_db_settings}

---

### MssqlVirtualMachineStorageConfigurationDataSettings <a name="MssqlVirtualMachineStorageConfigurationDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationDataSettings {
    string DefaultFilePath,
    double[] Luns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.luns">Luns</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.luns"></a>

```csharp
public double[] Luns { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

### MssqlVirtualMachineStorageConfigurationLogSettings <a name="MssqlVirtualMachineStorageConfigurationLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationLogSettings {
    string DefaultFilePath,
    double[] Luns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.luns">Luns</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.luns"></a>

```csharp
public double[] Luns { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

### MssqlVirtualMachineStorageConfigurationTempDbSettings <a name="MssqlVirtualMachineStorageConfigurationTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationTempDbSettings {
    string DefaultFilePath,
    double[] Luns,
    double DataFileCount = null,
    double DataFileGrowthInMb = null,
    double DataFileSizeMb = null,
    double LogFileGrowthMb = null,
    double LogFileSizeMb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.luns">Luns</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileCount">DataFileCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_count MssqlVirtualMachine#data_file_count}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileGrowthInMb">DataFileGrowthInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_growth_in_mb MssqlVirtualMachine#data_file_growth_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileSizeMb">DataFileSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_size_mb MssqlVirtualMachine#data_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileGrowthMb">LogFileGrowthMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_file_growth_mb MssqlVirtualMachine#log_file_growth_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileSizeMb">LogFileSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_file_size_mb MssqlVirtualMachine#log_file_size_mb}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.luns"></a>

```csharp
public double[] Luns { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

##### `DataFileCount`<sup>Optional</sup> <a name="DataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileCount"></a>

```csharp
public double DataFileCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_count MssqlVirtualMachine#data_file_count}.

---

##### `DataFileGrowthInMb`<sup>Optional</sup> <a name="DataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileGrowthInMb"></a>

```csharp
public double DataFileGrowthInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_growth_in_mb MssqlVirtualMachine#data_file_growth_in_mb}.

---

##### `DataFileSizeMb`<sup>Optional</sup> <a name="DataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileSizeMb"></a>

```csharp
public double DataFileSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#data_file_size_mb MssqlVirtualMachine#data_file_size_mb}.

---

##### `LogFileGrowthMb`<sup>Optional</sup> <a name="LogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileGrowthMb"></a>

```csharp
public double LogFileGrowthMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_file_growth_mb MssqlVirtualMachine#log_file_growth_mb}.

---

##### `LogFileSizeMb`<sup>Optional</sup> <a name="LogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileSizeMb"></a>

```csharp
public double LogFileSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#log_file_size_mb MssqlVirtualMachine#log_file_size_mb}.

---

### MssqlVirtualMachineTimeouts <a name="MssqlVirtualMachineTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#create MssqlVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#delete MssqlVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#read MssqlVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#update MssqlVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#create MssqlVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#delete MssqlVirtualMachine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#read MssqlVirtualMachine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/mssql_virtual_machine#update MssqlVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineAssessmentOutputReference <a name="MssqlVirtualMachineAssessmentOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAssessmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetRunImmediately">ResetRunImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(MssqlVirtualMachineAssessmentSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRunImmediately` <a name="ResetRunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetRunImmediately"></a>

```csharp
private void ResetRunImmediately()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference">MssqlVirtualMachineAssessmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediatelyInput">RunImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediately">RunImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.schedule"></a>

```csharp
public MssqlVirtualMachineAssessmentScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference">MssqlVirtualMachineAssessmentScheduleOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RunImmediatelyInput`<sup>Optional</sup> <a name="RunImmediatelyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediatelyInput"></a>

```csharp
public object RunImmediatelyInput { get; }
```

- *Type:* object

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.scheduleInput"></a>

```csharp
public MssqlVirtualMachineAssessmentSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RunImmediately`<sup>Required</sup> <a name="RunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediately"></a>

```csharp
public object RunImmediately { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineAssessment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---


### MssqlVirtualMachineAssessmentScheduleOutputReference <a name="MssqlVirtualMachineAssessmentScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAssessmentScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetMonthlyOccurrence">ResetMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetWeeklyInterval">ResetWeeklyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonthlyOccurrence` <a name="ResetMonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetMonthlyOccurrence"></a>

```csharp
private void ResetMonthlyOccurrence()
```

##### `ResetWeeklyInterval` <a name="ResetWeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetWeeklyInterval"></a>

```csharp
private void ResetWeeklyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrenceInput">MonthlyOccurrenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyIntervalInput">WeeklyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyInterval">WeeklyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `MonthlyOccurrenceInput`<sup>Optional</sup> <a name="MonthlyOccurrenceInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrenceInput"></a>

```csharp
public double MonthlyOccurrenceInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `WeeklyIntervalInput`<sup>Optional</sup> <a name="WeeklyIntervalInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyIntervalInput"></a>

```csharp
public double WeeklyIntervalInput { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `MonthlyOccurrence`<sup>Required</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrence"></a>

```csharp
public double MonthlyOccurrence { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `WeeklyInterval`<sup>Required</sup> <a name="WeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyInterval"></a>

```csharp
public double WeeklyInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineAssessmentSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---


### MssqlVirtualMachineAutoBackupManualScheduleOutputReference <a name="MssqlVirtualMachineAutoBackupManualScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoBackupManualScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequencyInput">FullBackupFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHourInput">FullBackupStartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHoursInput">FullBackupWindowInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutesInput">LogBackupFrequencyInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequency">FullBackupFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHour">FullBackupStartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHours">FullBackupWindowInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutes">LogBackupFrequencyInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `FullBackupFrequencyInput`<sup>Optional</sup> <a name="FullBackupFrequencyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequencyInput"></a>

```csharp
public string FullBackupFrequencyInput { get; }
```

- *Type:* string

---

##### `FullBackupStartHourInput`<sup>Optional</sup> <a name="FullBackupStartHourInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHourInput"></a>

```csharp
public double FullBackupStartHourInput { get; }
```

- *Type:* double

---

##### `FullBackupWindowInHoursInput`<sup>Optional</sup> <a name="FullBackupWindowInHoursInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHoursInput"></a>

```csharp
public double FullBackupWindowInHoursInput { get; }
```

- *Type:* double

---

##### `LogBackupFrequencyInMinutesInput`<sup>Optional</sup> <a name="LogBackupFrequencyInMinutesInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutesInput"></a>

```csharp
public double LogBackupFrequencyInMinutesInput { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `FullBackupFrequency`<sup>Required</sup> <a name="FullBackupFrequency" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequency"></a>

```csharp
public string FullBackupFrequency { get; }
```

- *Type:* string

---

##### `FullBackupStartHour`<sup>Required</sup> <a name="FullBackupStartHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHour"></a>

```csharp
public double FullBackupStartHour { get; }
```

- *Type:* double

---

##### `FullBackupWindowInHours`<sup>Required</sup> <a name="FullBackupWindowInHours" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHours"></a>

```csharp
public double FullBackupWindowInHours { get; }
```

- *Type:* double

---

##### `LogBackupFrequencyInMinutes`<sup>Required</sup> <a name="LogBackupFrequencyInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutes"></a>

```csharp
public double LogBackupFrequencyInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineAutoBackupManualSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---


### MssqlVirtualMachineAutoBackupOutputReference <a name="MssqlVirtualMachineAutoBackupOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule">PutManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionEnabled">ResetEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionPassword">ResetEncryptionPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetManualSchedule">ResetManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetSystemDatabasesBackupEnabled">ResetSystemDatabasesBackupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManualSchedule` <a name="PutManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule"></a>

```csharp
private void PutManualSchedule(MssqlVirtualMachineAutoBackupManualSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---

##### `ResetEncryptionEnabled` <a name="ResetEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionEnabled"></a>

```csharp
private void ResetEncryptionEnabled()
```

##### `ResetEncryptionPassword` <a name="ResetEncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionPassword"></a>

```csharp
private void ResetEncryptionPassword()
```

##### `ResetManualSchedule` <a name="ResetManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetManualSchedule"></a>

```csharp
private void ResetManualSchedule()
```

##### `ResetSystemDatabasesBackupEnabled` <a name="ResetSystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetSystemDatabasesBackupEnabled"></a>

```csharp
private void ResetSystemDatabasesBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualSchedule">ManualSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference">MssqlVirtualMachineAutoBackupManualScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabledInput">EncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPasswordInput">EncryptionPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualScheduleInput">ManualScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpointInput">StorageBlobEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabledInput">SystemDatabasesBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabled">EncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPassword">EncryptionPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpoint">StorageBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabled">SystemDatabasesBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualSchedule`<sup>Required</sup> <a name="ManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualSchedule"></a>

```csharp
public MssqlVirtualMachineAutoBackupManualScheduleOutputReference ManualSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference">MssqlVirtualMachineAutoBackupManualScheduleOutputReference</a>

---

##### `EncryptionEnabledInput`<sup>Optional</sup> <a name="EncryptionEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabledInput"></a>

```csharp
public object EncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionPasswordInput`<sup>Optional</sup> <a name="EncryptionPasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPasswordInput"></a>

```csharp
public string EncryptionPasswordInput { get; }
```

- *Type:* string

---

##### `ManualScheduleInput`<sup>Optional</sup> <a name="ManualScheduleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualScheduleInput"></a>

```csharp
public MssqlVirtualMachineAutoBackupManualSchedule ManualScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDaysInput"></a>

```csharp
public double RetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageBlobEndpointInput`<sup>Optional</sup> <a name="StorageBlobEndpointInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpointInput"></a>

```csharp
public string StorageBlobEndpointInput { get; }
```

- *Type:* string

---

##### `SystemDatabasesBackupEnabledInput`<sup>Optional</sup> <a name="SystemDatabasesBackupEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabledInput"></a>

```csharp
public object SystemDatabasesBackupEnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionEnabled`<sup>Required</sup> <a name="EncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabled"></a>

```csharp
public object EncryptionEnabled { get; }
```

- *Type:* object

---

##### `EncryptionPassword`<sup>Required</sup> <a name="EncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPassword"></a>

```csharp
public string EncryptionPassword { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageBlobEndpoint`<sup>Required</sup> <a name="StorageBlobEndpoint" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpoint"></a>

```csharp
public string StorageBlobEndpoint { get; }
```

- *Type:* string

---

##### `SystemDatabasesBackupEnabled`<sup>Required</sup> <a name="SystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabled"></a>

```csharp
public object SystemDatabasesBackupEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineAutoBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---


### MssqlVirtualMachineAutoPatchingOutputReference <a name="MssqlVirtualMachineAutoPatchingOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineAutoPatchingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutesInput">MaintenanceWindowDurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHourInput">MaintenanceWindowStartingHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutes">MaintenanceWindowDurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHour">MaintenanceWindowStartingHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDurationInMinutesInput`<sup>Optional</sup> <a name="MaintenanceWindowDurationInMinutesInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutesInput"></a>

```csharp
public double MaintenanceWindowDurationInMinutesInput { get; }
```

- *Type:* double

---

##### `MaintenanceWindowStartingHourInput`<sup>Optional</sup> <a name="MaintenanceWindowStartingHourInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHourInput"></a>

```csharp
public double MaintenanceWindowStartingHourInput { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDurationInMinutes`<sup>Required</sup> <a name="MaintenanceWindowDurationInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutes"></a>

```csharp
public double MaintenanceWindowDurationInMinutes { get; }
```

- *Type:* double

---

##### `MaintenanceWindowStartingHour`<sup>Required</sup> <a name="MaintenanceWindowStartingHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHour"></a>

```csharp
public double MaintenanceWindowStartingHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineAutoPatching InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---


### MssqlVirtualMachineKeyVaultCredentialOutputReference <a name="MssqlVirtualMachineKeyVaultCredentialOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineKeyVaultCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrlInput">KeyVaultUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecretInput">ServicePrincipalSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrl">KeyVaultUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecret">ServicePrincipalSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultUrlInput`<sup>Optional</sup> <a name="KeyVaultUrlInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrlInput"></a>

```csharp
public string KeyVaultUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalNameInput"></a>

```csharp
public string ServicePrincipalNameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalSecretInput`<sup>Optional</sup> <a name="ServicePrincipalSecretInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecretInput"></a>

```csharp
public string ServicePrincipalSecretInput { get; }
```

- *Type:* string

---

##### `KeyVaultUrl`<sup>Required</sup> <a name="KeyVaultUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrl"></a>

```csharp
public string KeyVaultUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `ServicePrincipalSecret`<sup>Required</sup> <a name="ServicePrincipalSecret" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecret"></a>

```csharp
public string ServicePrincipalSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineKeyVaultCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---


### MssqlVirtualMachineSqlInstanceOutputReference <a name="MssqlVirtualMachineSqlInstanceOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineSqlInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetAdhocWorkloadsOptimizationEnabled">ResetAdhocWorkloadsOptimizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetInstantFileInitializationEnabled">ResetInstantFileInitializationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetLockPagesInMemoryEnabled">ResetLockPagesInMemoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxDop">ResetMaxDop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxServerMemoryMb">ResetMaxServerMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMinServerMemoryMb">ResetMinServerMemoryMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdhocWorkloadsOptimizationEnabled` <a name="ResetAdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetAdhocWorkloadsOptimizationEnabled"></a>

```csharp
private void ResetAdhocWorkloadsOptimizationEnabled()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetCollation"></a>

```csharp
private void ResetCollation()
```

##### `ResetInstantFileInitializationEnabled` <a name="ResetInstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetInstantFileInitializationEnabled"></a>

```csharp
private void ResetInstantFileInitializationEnabled()
```

##### `ResetLockPagesInMemoryEnabled` <a name="ResetLockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetLockPagesInMemoryEnabled"></a>

```csharp
private void ResetLockPagesInMemoryEnabled()
```

##### `ResetMaxDop` <a name="ResetMaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxDop"></a>

```csharp
private void ResetMaxDop()
```

##### `ResetMaxServerMemoryMb` <a name="ResetMaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxServerMemoryMb"></a>

```csharp
private void ResetMaxServerMemoryMb()
```

##### `ResetMinServerMemoryMb` <a name="ResetMinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMinServerMemoryMb"></a>

```csharp
private void ResetMinServerMemoryMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabledInput">AdhocWorkloadsOptimizationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collationInput">CollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabledInput">InstantFileInitializationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabledInput">LockPagesInMemoryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDopInput">MaxDopInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMbInput">MaxServerMemoryMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMbInput">MinServerMemoryMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabled">AdhocWorkloadsOptimizationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabled">InstantFileInitializationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabled">LockPagesInMemoryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDop">MaxDop</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMb">MaxServerMemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMb">MinServerMemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdhocWorkloadsOptimizationEnabledInput`<sup>Optional</sup> <a name="AdhocWorkloadsOptimizationEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabledInput"></a>

```csharp
public object AdhocWorkloadsOptimizationEnabledInput { get; }
```

- *Type:* object

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collationInput"></a>

```csharp
public string CollationInput { get; }
```

- *Type:* string

---

##### `InstantFileInitializationEnabledInput`<sup>Optional</sup> <a name="InstantFileInitializationEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabledInput"></a>

```csharp
public object InstantFileInitializationEnabledInput { get; }
```

- *Type:* object

---

##### `LockPagesInMemoryEnabledInput`<sup>Optional</sup> <a name="LockPagesInMemoryEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabledInput"></a>

```csharp
public object LockPagesInMemoryEnabledInput { get; }
```

- *Type:* object

---

##### `MaxDopInput`<sup>Optional</sup> <a name="MaxDopInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDopInput"></a>

```csharp
public double MaxDopInput { get; }
```

- *Type:* double

---

##### `MaxServerMemoryMbInput`<sup>Optional</sup> <a name="MaxServerMemoryMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMbInput"></a>

```csharp
public double MaxServerMemoryMbInput { get; }
```

- *Type:* double

---

##### `MinServerMemoryMbInput`<sup>Optional</sup> <a name="MinServerMemoryMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMbInput"></a>

```csharp
public double MinServerMemoryMbInput { get; }
```

- *Type:* double

---

##### `AdhocWorkloadsOptimizationEnabled`<sup>Required</sup> <a name="AdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabled"></a>

```csharp
public object AdhocWorkloadsOptimizationEnabled { get; }
```

- *Type:* object

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `InstantFileInitializationEnabled`<sup>Required</sup> <a name="InstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabled"></a>

```csharp
public object InstantFileInitializationEnabled { get; }
```

- *Type:* object

---

##### `LockPagesInMemoryEnabled`<sup>Required</sup> <a name="LockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabled"></a>

```csharp
public object LockPagesInMemoryEnabled { get; }
```

- *Type:* object

---

##### `MaxDop`<sup>Required</sup> <a name="MaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDop"></a>

```csharp
public double MaxDop { get; }
```

- *Type:* double

---

##### `MaxServerMemoryMb`<sup>Required</sup> <a name="MaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMb"></a>

```csharp
public double MaxServerMemoryMb { get; }
```

- *Type:* double

---

##### `MinServerMemoryMb`<sup>Required</sup> <a name="MinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMb"></a>

```csharp
public double MinServerMemoryMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineSqlInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---


### MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.luns">Luns</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePathInput"></a>

```csharp
public string DefaultFilePathInput { get; }
```

- *Type:* string

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.lunsInput"></a>

```csharp
public double[] LunsInput { get; }
```

- *Type:* double[]

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; }
```

- *Type:* string

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.luns"></a>

```csharp
public double[] Luns { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationDataSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---


### MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.luns">Luns</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePathInput"></a>

```csharp
public string DefaultFilePathInput { get; }
```

- *Type:* string

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.lunsInput"></a>

```csharp
public double[] LunsInput { get; }
```

- *Type:* double[]

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; }
```

- *Type:* string

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.luns"></a>

```csharp
public double[] Luns { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---


### MssqlVirtualMachineStorageConfigurationOutputReference <a name="MssqlVirtualMachineStorageConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings">PutDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings">PutLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings">PutTempDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetDataSettings">ResetDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetLogSettings">ResetLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetSystemDbOnDataDiskEnabled">ResetSystemDbOnDataDiskEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetTempDbSettings">ResetTempDbSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSettings` <a name="PutDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings"></a>

```csharp
private void PutDataSettings(MssqlVirtualMachineStorageConfigurationDataSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---

##### `PutLogSettings` <a name="PutLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings"></a>

```csharp
private void PutLogSettings(MssqlVirtualMachineStorageConfigurationLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---

##### `PutTempDbSettings` <a name="PutTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings"></a>

```csharp
private void PutTempDbSettings(MssqlVirtualMachineStorageConfigurationTempDbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---

##### `ResetDataSettings` <a name="ResetDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetDataSettings"></a>

```csharp
private void ResetDataSettings()
```

##### `ResetLogSettings` <a name="ResetLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetLogSettings"></a>

```csharp
private void ResetLogSettings()
```

##### `ResetSystemDbOnDataDiskEnabled` <a name="ResetSystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetSystemDbOnDataDiskEnabled"></a>

```csharp
private void ResetSystemDbOnDataDiskEnabled()
```

##### `ResetTempDbSettings` <a name="ResetTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetTempDbSettings"></a>

```csharp
private void ResetTempDbSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettings">DataSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference">MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettings">LogSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference">MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettings">TempDbSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference">MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettingsInput">DataSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettingsInput">LogSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadTypeInput">StorageWorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabledInput">SystemDbOnDataDiskEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettingsInput">TempDbSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadType">StorageWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabled">SystemDbOnDataDiskEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSettings`<sup>Required</sup> <a name="DataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference DataSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference">MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference</a>

---

##### `LogSettings`<sup>Required</sup> <a name="LogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference LogSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference">MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference</a>

---

##### `TempDbSettings`<sup>Required</sup> <a name="TempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettings"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference TempDbSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference">MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference</a>

---

##### `DataSettingsInput`<sup>Optional</sup> <a name="DataSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettingsInput"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationDataSettings DataSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `LogSettingsInput`<sup>Optional</sup> <a name="LogSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettingsInput"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationLogSettings LogSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---

##### `StorageWorkloadTypeInput`<sup>Optional</sup> <a name="StorageWorkloadTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadTypeInput"></a>

```csharp
public string StorageWorkloadTypeInput { get; }
```

- *Type:* string

---

##### `SystemDbOnDataDiskEnabledInput`<sup>Optional</sup> <a name="SystemDbOnDataDiskEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabledInput"></a>

```csharp
public object SystemDbOnDataDiskEnabledInput { get; }
```

- *Type:* object

---

##### `TempDbSettingsInput`<sup>Optional</sup> <a name="TempDbSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettingsInput"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationTempDbSettings TempDbSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `StorageWorkloadType`<sup>Required</sup> <a name="StorageWorkloadType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadType"></a>

```csharp
public string StorageWorkloadType { get; }
```

- *Type:* string

---

##### `SystemDbOnDataDiskEnabled`<sup>Required</sup> <a name="SystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabled"></a>

```csharp
public object SystemDbOnDataDiskEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineStorageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---


### MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileCount">ResetDataFileCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileGrowthInMb">ResetDataFileGrowthInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileSizeMb">ResetDataFileSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileGrowthMb">ResetLogFileGrowthMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileSizeMb">ResetLogFileSizeMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataFileCount` <a name="ResetDataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileCount"></a>

```csharp
private void ResetDataFileCount()
```

##### `ResetDataFileGrowthInMb` <a name="ResetDataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileGrowthInMb"></a>

```csharp
private void ResetDataFileGrowthInMb()
```

##### `ResetDataFileSizeMb` <a name="ResetDataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileSizeMb"></a>

```csharp
private void ResetDataFileSizeMb()
```

##### `ResetLogFileGrowthMb` <a name="ResetLogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileGrowthMb"></a>

```csharp
private void ResetLogFileGrowthMb()
```

##### `ResetLogFileSizeMb` <a name="ResetLogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileSizeMb"></a>

```csharp
private void ResetLogFileSizeMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCountInput">DataFileCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMbInput">DataFileGrowthInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMbInput">DataFileSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMbInput">LogFileGrowthMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMbInput">LogFileSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCount">DataFileCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMb">DataFileGrowthInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMb">DataFileSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMb">LogFileGrowthMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMb">LogFileSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.luns">Luns</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFileCountInput`<sup>Optional</sup> <a name="DataFileCountInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCountInput"></a>

```csharp
public double DataFileCountInput { get; }
```

- *Type:* double

---

##### `DataFileGrowthInMbInput`<sup>Optional</sup> <a name="DataFileGrowthInMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMbInput"></a>

```csharp
public double DataFileGrowthInMbInput { get; }
```

- *Type:* double

---

##### `DataFileSizeMbInput`<sup>Optional</sup> <a name="DataFileSizeMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMbInput"></a>

```csharp
public double DataFileSizeMbInput { get; }
```

- *Type:* double

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePathInput"></a>

```csharp
public string DefaultFilePathInput { get; }
```

- *Type:* string

---

##### `LogFileGrowthMbInput`<sup>Optional</sup> <a name="LogFileGrowthMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMbInput"></a>

```csharp
public double LogFileGrowthMbInput { get; }
```

- *Type:* double

---

##### `LogFileSizeMbInput`<sup>Optional</sup> <a name="LogFileSizeMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMbInput"></a>

```csharp
public double LogFileSizeMbInput { get; }
```

- *Type:* double

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.lunsInput"></a>

```csharp
public double[] LunsInput { get; }
```

- *Type:* double[]

---

##### `DataFileCount`<sup>Required</sup> <a name="DataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCount"></a>

```csharp
public double DataFileCount { get; }
```

- *Type:* double

---

##### `DataFileGrowthInMb`<sup>Required</sup> <a name="DataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMb"></a>

```csharp
public double DataFileGrowthInMb { get; }
```

- *Type:* double

---

##### `DataFileSizeMb`<sup>Required</sup> <a name="DataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMb"></a>

```csharp
public double DataFileSizeMb { get; }
```

- *Type:* double

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePath"></a>

```csharp
public string DefaultFilePath { get; }
```

- *Type:* string

---

##### `LogFileGrowthMb`<sup>Required</sup> <a name="LogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMb"></a>

```csharp
public double LogFileGrowthMb { get; }
```

- *Type:* double

---

##### `LogFileSizeMb`<sup>Required</sup> <a name="LogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMb"></a>

```csharp
public double LogFileSizeMb { get; }
```

- *Type:* double

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.luns"></a>

```csharp
public double[] Luns { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.internalValue"></a>

```csharp
public MssqlVirtualMachineStorageConfigurationTempDbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---


### MssqlVirtualMachineTimeoutsOutputReference <a name="MssqlVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlVirtualMachineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



