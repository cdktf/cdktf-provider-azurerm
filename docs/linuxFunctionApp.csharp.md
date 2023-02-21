# `linuxFunctionApp` Submodule <a name="`linuxFunctionApp` Submodule" id="@cdktf/provider-azurerm.linuxFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxFunctionApp <a name="LinuxFunctionApp" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app azurerm_linux_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionApp(Construct Scope, string Id, LinuxFunctionAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig">LinuxFunctionAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig">LinuxFunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putAuthSettings">PutAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStickySettings">PutStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetAuthSettings">ResetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetBuiltinLoggingEnabled">ResetBuiltinLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateEnabled">ResetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateExclusionPaths">ResetClientCertificateExclusionPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateMode">ResetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetContentShareForceDisabled">ResetContentShareForceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetDailyMemoryTimeQuota">ResetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetFunctionsExtensionVersion">ResetFunctionsExtensionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetKeyVaultReferenceIdentityId">ResetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStickySettings">ResetStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageKeyVaultSecretId">ResetStorageKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageUsesManagedIdentity">ResetStorageUsesManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthSettings` <a name="PutAuthSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putAuthSettings"></a>

```csharp
private void PutAuthSettings(LinuxFunctionAppAuthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a>

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putBackup"></a>

```csharp
private void PutBackup(LinuxFunctionAppBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a>

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putConnectionString"></a>

```csharp
private void PutConnectionString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putConnectionString.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putIdentity"></a>

```csharp
private void PutIdentity(LinuxFunctionAppIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putSiteConfig"></a>

```csharp
private void PutSiteConfig(LinuxFunctionAppSiteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a>

---

##### `PutStickySettings` <a name="PutStickySettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStickySettings"></a>

```csharp
private void PutStickySettings(LinuxFunctionAppStickySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStickySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStorageAccount"></a>

```csharp
private void PutStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putTimeouts"></a>

```csharp
private void PutTimeouts(LinuxFunctionAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts">LinuxFunctionAppTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetAppSettings"></a>

```csharp
private void ResetAppSettings()
```

##### `ResetAuthSettings` <a name="ResetAuthSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetAuthSettings"></a>

```csharp
private void ResetAuthSettings()
```

##### `ResetBackup` <a name="ResetBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetBackup"></a>

```csharp
private void ResetBackup()
```

##### `ResetBuiltinLoggingEnabled` <a name="ResetBuiltinLoggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetBuiltinLoggingEnabled"></a>

```csharp
private void ResetBuiltinLoggingEnabled()
```

##### `ResetClientCertificateEnabled` <a name="ResetClientCertificateEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateEnabled"></a>

```csharp
private void ResetClientCertificateEnabled()
```

##### `ResetClientCertificateExclusionPaths` <a name="ResetClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateExclusionPaths"></a>

```csharp
private void ResetClientCertificateExclusionPaths()
```

##### `ResetClientCertificateMode` <a name="ResetClientCertificateMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetClientCertificateMode"></a>

```csharp
private void ResetClientCertificateMode()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetContentShareForceDisabled` <a name="ResetContentShareForceDisabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetContentShareForceDisabled"></a>

```csharp
private void ResetContentShareForceDisabled()
```

##### `ResetDailyMemoryTimeQuota` <a name="ResetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetDailyMemoryTimeQuota"></a>

```csharp
private void ResetDailyMemoryTimeQuota()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFunctionsExtensionVersion` <a name="ResetFunctionsExtensionVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetFunctionsExtensionVersion"></a>

```csharp
private void ResetFunctionsExtensionVersion()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKeyVaultReferenceIdentityId` <a name="ResetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetKeyVaultReferenceIdentityId"></a>

```csharp
private void ResetKeyVaultReferenceIdentityId()
```

##### `ResetStickySettings` <a name="ResetStickySettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStickySettings"></a>

```csharp
private void ResetStickySettings()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccount"></a>

```csharp
private void ResetStorageAccount()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageAccountName"></a>

```csharp
private void ResetStorageAccountName()
```

##### `ResetStorageKeyVaultSecretId` <a name="ResetStorageKeyVaultSecretId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageKeyVaultSecretId"></a>

```csharp
private void ResetStorageKeyVaultSecretId()
```

##### `ResetStorageUsesManagedIdentity` <a name="ResetStorageUsesManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetStorageUsesManagedIdentity"></a>

```csharp
private void ResetStorageUsesManagedIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LinuxFunctionApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LinuxFunctionApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LinuxFunctionApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference">LinuxFunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference">LinuxFunctionAppBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList">LinuxFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference">LinuxFunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.outboundIpAddressList">OutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.possibleOutboundIpAddressList">PossibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference">LinuxFunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList">LinuxFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.stickySettings">StickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference">LinuxFunctionAppStickySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList">LinuxFunctionAppStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference">LinuxFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.appSettingsInput">AppSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.authSettingsInput">AuthSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.builtinLoggingEnabledInput">BuiltinLoggingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateEnabledInput">ClientCertificateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateExclusionPathsInput">ClientCertificateExclusionPathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateModeInput">ClientCertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connectionStringInput">ConnectionStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.contentShareForceDisabledInput">ContentShareForceDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dailyMemoryTimeQuotaInput">DailyMemoryTimeQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.functionsExtensionVersionInput">FunctionsExtensionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.keyVaultReferenceIdentityIdInput">KeyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.servicePlanIdInput">ServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.stickySettingsInput">StickySettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountInput">StorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageKeyVaultSecretIdInput">StorageKeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageUsesManagedIdentityInput">StorageUsesManagedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.builtinLoggingEnabled">BuiltinLoggingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateExclusionPaths">ClientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.contentShareForceDisabled">ContentShareForceDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.functionsExtensionVersion">FunctionsExtensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.servicePlanId">ServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageKeyVaultSecretId">StorageKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageUsesManagedIdentity">StorageUsesManagedIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.authSettings"></a>

```csharp
public LinuxFunctionAppAuthSettingsOutputReference AuthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference">LinuxFunctionAppAuthSettingsOutputReference</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.backup"></a>

```csharp
public LinuxFunctionAppBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference">LinuxFunctionAppBackupOutputReference</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connectionString"></a>

```csharp
public LinuxFunctionAppConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList">LinuxFunctionAppConnectionStringList</a>

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.customDomainVerificationId"></a>

```csharp
public string CustomDomainVerificationId { get; }
```

- *Type:* string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.identity"></a>

```csharp
public LinuxFunctionAppIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference">LinuxFunctionAppIdentityOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.outboundIpAddresses"></a>

```csharp
public string OutboundIpAddresses { get; }
```

- *Type:* string

---

##### `OutboundIpAddressList`<sup>Required</sup> <a name="OutboundIpAddressList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.outboundIpAddressList"></a>

```csharp
public string[] OutboundIpAddressList { get; }
```

- *Type:* string[]

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.possibleOutboundIpAddresses"></a>

```csharp
public string PossibleOutboundIpAddresses { get; }
```

- *Type:* string

---

##### `PossibleOutboundIpAddressList`<sup>Required</sup> <a name="PossibleOutboundIpAddressList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.possibleOutboundIpAddressList"></a>

```csharp
public string[] PossibleOutboundIpAddressList { get; }
```

- *Type:* string[]

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteConfig"></a>

```csharp
public LinuxFunctionAppSiteConfigOutputReference SiteConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference">LinuxFunctionAppSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteCredential"></a>

```csharp
public LinuxFunctionAppSiteCredentialList SiteCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList">LinuxFunctionAppSiteCredentialList</a>

---

##### `StickySettings`<sup>Required</sup> <a name="StickySettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.stickySettings"></a>

```csharp
public LinuxFunctionAppStickySettingsOutputReference StickySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference">LinuxFunctionAppStickySettingsOutputReference</a>

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccount"></a>

```csharp
public LinuxFunctionAppStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList">LinuxFunctionAppStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.timeouts"></a>

```csharp
public LinuxFunctionAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference">LinuxFunctionAppTimeoutsOutputReference</a>

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.appSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthSettingsInput`<sup>Optional</sup> <a name="AuthSettingsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.authSettingsInput"></a>

```csharp
public LinuxFunctionAppAuthSettings AuthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.backupInput"></a>

```csharp
public LinuxFunctionAppBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a>

---

##### `BuiltinLoggingEnabledInput`<sup>Optional</sup> <a name="BuiltinLoggingEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.builtinLoggingEnabledInput"></a>

```csharp
public object BuiltinLoggingEnabledInput { get; }
```

- *Type:* object

---

##### `ClientCertificateEnabledInput`<sup>Optional</sup> <a name="ClientCertificateEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateEnabledInput"></a>

```csharp
public object ClientCertificateEnabledInput { get; }
```

- *Type:* object

---

##### `ClientCertificateExclusionPathsInput`<sup>Optional</sup> <a name="ClientCertificateExclusionPathsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateExclusionPathsInput"></a>

```csharp
public string ClientCertificateExclusionPathsInput { get; }
```

- *Type:* string

---

##### `ClientCertificateModeInput`<sup>Optional</sup> <a name="ClientCertificateModeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateModeInput"></a>

```csharp
public string ClientCertificateModeInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.connectionStringInput"></a>

```csharp
public object ConnectionStringInput { get; }
```

- *Type:* object

---

##### `ContentShareForceDisabledInput`<sup>Optional</sup> <a name="ContentShareForceDisabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.contentShareForceDisabledInput"></a>

```csharp
public object ContentShareForceDisabledInput { get; }
```

- *Type:* object

---

##### `DailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="DailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```csharp
public double DailyMemoryTimeQuotaInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FunctionsExtensionVersionInput`<sup>Optional</sup> <a name="FunctionsExtensionVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.functionsExtensionVersionInput"></a>

```csharp
public string FunctionsExtensionVersionInput { get; }
```

- *Type:* string

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.httpsOnlyInput"></a>

```csharp
public object HttpsOnlyInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.identityInput"></a>

```csharp
public LinuxFunctionAppIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```csharp
public string KeyVaultReferenceIdentityIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServicePlanIdInput`<sup>Optional</sup> <a name="ServicePlanIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.servicePlanIdInput"></a>

```csharp
public string ServicePlanIdInput { get; }
```

- *Type:* string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.siteConfigInput"></a>

```csharp
public LinuxFunctionAppSiteConfig SiteConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a>

---

##### `StickySettingsInput`<sup>Optional</sup> <a name="StickySettingsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.stickySettingsInput"></a>

```csharp
public LinuxFunctionAppStickySettings StickySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a>

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountInput"></a>

```csharp
public object StorageAccountInput { get; }
```

- *Type:* object

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `StorageKeyVaultSecretIdInput`<sup>Optional</sup> <a name="StorageKeyVaultSecretIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageKeyVaultSecretIdInput"></a>

```csharp
public string StorageKeyVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `StorageUsesManagedIdentityInput`<sup>Optional</sup> <a name="StorageUsesManagedIdentityInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageUsesManagedIdentityInput"></a>

```csharp
public object StorageUsesManagedIdentityInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuiltinLoggingEnabled`<sup>Required</sup> <a name="BuiltinLoggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.builtinLoggingEnabled"></a>

```csharp
public object BuiltinLoggingEnabled { get; }
```

- *Type:* object

---

##### `ClientCertificateEnabled`<sup>Required</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateEnabled"></a>

```csharp
public object ClientCertificateEnabled { get; }
```

- *Type:* object

---

##### `ClientCertificateExclusionPaths`<sup>Required</sup> <a name="ClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateExclusionPaths"></a>

```csharp
public string ClientCertificateExclusionPaths { get; }
```

- *Type:* string

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.clientCertificateMode"></a>

```csharp
public string ClientCertificateMode { get; }
```

- *Type:* string

---

##### `ContentShareForceDisabled`<sup>Required</sup> <a name="ContentShareForceDisabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.contentShareForceDisabled"></a>

```csharp
public object ContentShareForceDisabled { get; }
```

- *Type:* object

---

##### `DailyMemoryTimeQuota`<sup>Required</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FunctionsExtensionVersion`<sup>Required</sup> <a name="FunctionsExtensionVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.functionsExtensionVersion"></a>

```csharp
public string FunctionsExtensionVersion { get; }
```

- *Type:* string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultReferenceIdentityId`<sup>Required</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.keyVaultReferenceIdentityId"></a>

```csharp
public string KeyVaultReferenceIdentityId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServicePlanId`<sup>Required</sup> <a name="ServicePlanId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.servicePlanId"></a>

```csharp
public string ServicePlanId { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageKeyVaultSecretId`<sup>Required</sup> <a name="StorageKeyVaultSecretId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageKeyVaultSecretId"></a>

```csharp
public string StorageKeyVaultSecretId { get; }
```

- *Type:* string

---

##### `StorageUsesManagedIdentity`<sup>Required</sup> <a name="StorageUsesManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.storageUsesManagedIdentity"></a>

```csharp
public object StorageUsesManagedIdentity { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxFunctionAppAuthSettings <a name="LinuxFunctionAppAuthSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettings {
    object Enabled,
    LinuxFunctionAppAuthSettingsActiveDirectory ActiveDirectory = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalLoginParameters = null,
    string[] AllowedExternalRedirectUrls = null,
    string DefaultProvider = null,
    LinuxFunctionAppAuthSettingsFacebook Facebook = null,
    LinuxFunctionAppAuthSettingsGithub Github = null,
    LinuxFunctionAppAuthSettingsGoogle Google = null,
    string Issuer = null,
    LinuxFunctionAppAuthSettingsMicrosoft Microsoft = null,
    string RuntimeVersion = null,
    double TokenRefreshExtensionHours = null,
    object TokenStoreEnabled = null,
    LinuxFunctionAppAuthSettingsTwitter Twitter = null,
    string UnauthenticatedClientAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.enabled">Enabled</a></code> | <code>object</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.additionalLoginParameters">AdditionalLoginParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.github">Github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.issuer">Issuer</a></code> | <code>string</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#enabled LinuxFunctionApp#enabled}

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.activeDirectory"></a>

```csharp
public LinuxFunctionAppAuthSettingsActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#active_directory LinuxFunctionApp#active_directory}

---

##### `AdditionalLoginParameters`<sup>Optional</sup> <a name="AdditionalLoginParameters" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.additionalLoginParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#additional_login_parameters LinuxFunctionApp#additional_login_parameters}

---

##### `AllowedExternalRedirectUrls`<sup>Optional</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; set; }
```

- *Type:* string[]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#allowed_external_redirect_urls LinuxFunctionApp#allowed_external_redirect_urls}

---

##### `DefaultProvider`<sup>Optional</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; set; }
```

- *Type:* string

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#default_provider LinuxFunctionApp#default_provider}

---

##### `Facebook`<sup>Optional</sup> <a name="Facebook" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.facebook"></a>

```csharp
public LinuxFunctionAppAuthSettingsFacebook Facebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#facebook LinuxFunctionApp#facebook}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.github"></a>

```csharp
public LinuxFunctionAppAuthSettingsGithub Github { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#github LinuxFunctionApp#github}

---

##### `Google`<sup>Optional</sup> <a name="Google" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.google"></a>

```csharp
public LinuxFunctionAppAuthSettingsGoogle Google { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#google LinuxFunctionApp#google}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#issuer LinuxFunctionApp#issuer}

---

##### `Microsoft`<sup>Optional</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.microsoft"></a>

```csharp
public LinuxFunctionAppAuthSettingsMicrosoft Microsoft { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#microsoft LinuxFunctionApp#microsoft}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#runtime_version LinuxFunctionApp#runtime_version}

---

##### `TokenRefreshExtensionHours`<sup>Optional</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; set; }
```

- *Type:* double

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#token_refresh_extension_hours LinuxFunctionApp#token_refresh_extension_hours}

---

##### `TokenStoreEnabled`<sup>Optional</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; set; }
```

- *Type:* object

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#token_store_enabled LinuxFunctionApp#token_store_enabled}

---

##### `Twitter`<sup>Optional</sup> <a name="Twitter" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.twitter"></a>

```csharp
public LinuxFunctionAppAuthSettingsTwitter Twitter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#twitter LinuxFunctionApp#twitter}

---

##### `UnauthenticatedClientAction`<sup>Optional</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; set; }
```

- *Type:* string

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#unauthenticated_client_action LinuxFunctionApp#unauthenticated_client_action}

---

### LinuxFunctionAppAuthSettingsActiveDirectory <a name="LinuxFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsActiveDirectory {
    string ClientId,
    string[] AllowedAudiences = null,
    string ClientSecret = null,
    string ClientSecretSettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientId">ClientId</a></code> | <code>string</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_id LinuxFunctionApp#client_id}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; set; }
```

- *Type:* string[]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#allowed_audiences LinuxFunctionApp#allowed_audiences}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret LinuxFunctionApp#client_secret}

---

##### `ClientSecretSettingName`<sup>Optional</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; set; }
```

- *Type:* string

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret_setting_name LinuxFunctionApp#client_secret_setting_name}

---

### LinuxFunctionAppAuthSettingsFacebook <a name="LinuxFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsFacebook {
    string AppId,
    string AppSecret = null,
    string AppSecretSettingName = null,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appId">AppId</a></code> | <code>string</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appSecret">AppSecret</a></code> | <code>string</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_id LinuxFunctionApp#app_id}

---

##### `AppSecret`<sup>Optional</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appSecret"></a>

```csharp
public string AppSecret { get; set; }
```

- *Type:* string

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_secret LinuxFunctionApp#app_secret}

---

##### `AppSecretSettingName`<sup>Optional</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.appSecretSettingName"></a>

```csharp
public string AppSecretSettingName { get; set; }
```

- *Type:* string

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_secret_setting_name LinuxFunctionApp#app_secret_setting_name}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#oauth_scopes LinuxFunctionApp#oauth_scopes}

---

### LinuxFunctionAppAuthSettingsGithub <a name="LinuxFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsGithub {
    string ClientId,
    string ClientSecret = null,
    string ClientSecretSettingName = null,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientId">ClientId</a></code> | <code>string</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_id LinuxFunctionApp#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret LinuxFunctionApp#client_secret}

---

##### `ClientSecretSettingName`<sup>Optional</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; set; }
```

- *Type:* string

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret_setting_name LinuxFunctionApp#client_secret_setting_name}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#oauth_scopes LinuxFunctionApp#oauth_scopes}

---

### LinuxFunctionAppAuthSettingsGoogle <a name="LinuxFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsGoogle {
    string ClientId,
    string ClientSecret = null,
    string ClientSecretSettingName = null,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientId">ClientId</a></code> | <code>string</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_id LinuxFunctionApp#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret LinuxFunctionApp#client_secret}

---

##### `ClientSecretSettingName`<sup>Optional</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; set; }
```

- *Type:* string

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret_setting_name LinuxFunctionApp#client_secret_setting_name}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#oauth_scopes LinuxFunctionApp#oauth_scopes}

---

### LinuxFunctionAppAuthSettingsMicrosoft <a name="LinuxFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsMicrosoft {
    string ClientId,
    string ClientSecret = null,
    string ClientSecretSettingName = null,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_id LinuxFunctionApp#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret LinuxFunctionApp#client_secret}

---

##### `ClientSecretSettingName`<sup>Optional</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; set; }
```

- *Type:* string

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_secret_setting_name LinuxFunctionApp#client_secret_setting_name}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#oauth_scopes LinuxFunctionApp#oauth_scopes}

---

### LinuxFunctionAppAuthSettingsTwitter <a name="LinuxFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsTwitter {
    string ConsumerKey,
    string ConsumerSecret = null,
    string ConsumerSecretSettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#consumer_key LinuxFunctionApp#consumer_key}

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#consumer_secret LinuxFunctionApp#consumer_secret}

---

##### `ConsumerSecretSettingName`<sup>Optional</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```csharp
public string ConsumerSecretSettingName { get; set; }
```

- *Type:* string

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#consumer_secret_setting_name LinuxFunctionApp#consumer_secret_setting_name}

---

### LinuxFunctionAppBackup <a name="LinuxFunctionAppBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppBackup {
    string Name,
    LinuxFunctionAppBackupSchedule Schedule,
    string StorageAccountUrl,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.name">Name</a></code> | <code>string</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>string</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.enabled">Enabled</a></code> | <code>object</code> | Should this backup job be enabled? |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.schedule"></a>

```csharp
public LinuxFunctionAppBackupSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#schedule LinuxFunctionApp#schedule}

---

##### `StorageAccountUrl`<sup>Required</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.storageAccountUrl"></a>

```csharp
public string StorageAccountUrl { get; set; }
```

- *Type:* string

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_account_url LinuxFunctionApp#storage_account_url}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#enabled LinuxFunctionApp#enabled}

---

### LinuxFunctionAppBackupSchedule <a name="LinuxFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppBackupSchedule {
    double FrequencyInterval,
    string FrequencyUnit,
    object KeepAtLeastOneBackup = null,
    double RetentionPeriodDays = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.frequencyUnit">FrequencyUnit</a></code> | <code>string</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.keepAtLeastOneBackup">KeepAtLeastOneBackup</a></code> | <code>object</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.startTime">StartTime</a></code> | <code>string</code> | When the schedule should start working in RFC-3339 format. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#frequency_interval LinuxFunctionApp#frequency_interval}

---

##### `FrequencyUnit`<sup>Required</sup> <a name="FrequencyUnit" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.frequencyUnit"></a>

```csharp
public string FrequencyUnit { get; set; }
```

- *Type:* string

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#frequency_unit LinuxFunctionApp#frequency_unit}

---

##### `KeepAtLeastOneBackup`<sup>Optional</sup> <a name="KeepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.keepAtLeastOneBackup"></a>

```csharp
public object KeepAtLeastOneBackup { get; set; }
```

- *Type:* object

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#keep_at_least_one_backup LinuxFunctionApp#keep_at_least_one_backup}

---

##### `RetentionPeriodDays`<sup>Optional</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; set; }
```

- *Type:* double

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#retention_period_days LinuxFunctionApp#retention_period_days}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#start_time LinuxFunctionApp#start_time}

---

### LinuxFunctionAppConfig <a name="LinuxFunctionAppConfig" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string ServicePlanId,
    LinuxFunctionAppSiteConfig SiteConfig,
    System.Collections.Generic.IDictionary<string, string> AppSettings = null,
    LinuxFunctionAppAuthSettings AuthSettings = null,
    LinuxFunctionAppBackup Backup = null,
    object BuiltinLoggingEnabled = null,
    object ClientCertificateEnabled = null,
    string ClientCertificateExclusionPaths = null,
    string ClientCertificateMode = null,
    object ConnectionString = null,
    object ContentShareForceDisabled = null,
    double DailyMemoryTimeQuota = null,
    object Enabled = null,
    string FunctionsExtensionVersion = null,
    object HttpsOnly = null,
    string Id = null,
    LinuxFunctionAppIdentity Identity = null,
    string KeyVaultReferenceIdentityId = null,
    LinuxFunctionAppStickySettings StickySettings = null,
    object StorageAccount = null,
    string StorageAccountAccessKey = null,
    string StorageAccountName = null,
    string StorageKeyVaultSecretId = null,
    object StorageUsesManagedIdentity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LinuxFunctionAppTimeouts Timeouts = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#location LinuxFunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#resource_group_name LinuxFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.servicePlanId">ServicePlanId</a></code> | <code>string</code> | The ID of the App Service Plan within which to create this Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.builtinLoggingEnabled">BuiltinLoggingEnabled</a></code> | <code>object</code> | Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>object</code> | Should the function app use Client Certificates. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateExclusionPaths">ClientCertificateExclusionPaths</a></code> | <code>string</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>string</code> | The mode of the Function App's client certificates requirement for incoming requests. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.connectionString">ConnectionString</a></code> | <code>object</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.contentShareForceDisabled">ContentShareForceDisabled</a></code> | <code>object</code> | Force disable the content share settings. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | The amount of memory in gigabyte-seconds that your application is allowed to consume per day. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.enabled">Enabled</a></code> | <code>object</code> | Is the Linux Function App enabled. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.functionsExtensionVersion">FunctionsExtensionVersion</a></code> | <code>string</code> | The runtime version associated with the Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | Can the Function App only be accessed via HTTPS? |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#id LinuxFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Key Vault access. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.stickySettings">StickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccount">StorageAccount</a></code> | <code>object</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | The access key which will be used to access the storage account for the Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | The backend storage account name which will be used by this Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageKeyVaultSecretId">StorageKeyVaultSecretId</a></code> | <code>string</code> | The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageUsesManagedIdentity">StorageUsesManagedIdentity</a></code> | <code>object</code> | Should the Function App use its Managed Identity to access storage? |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#tags LinuxFunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts">LinuxFunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#location LinuxFunctionApp#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#resource_group_name LinuxFunctionApp#resource_group_name}.

---

##### `ServicePlanId`<sup>Required</sup> <a name="ServicePlanId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.servicePlanId"></a>

```csharp
public string ServicePlanId { get; set; }
```

- *Type:* string

The ID of the App Service Plan within which to create this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#service_plan_id LinuxFunctionApp#service_plan_id}

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.siteConfig"></a>

```csharp
public LinuxFunctionAppSiteConfig SiteConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#site_config LinuxFunctionApp#site_config}

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_settings LinuxFunctionApp#app_settings}

---

##### `AuthSettings`<sup>Optional</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.authSettings"></a>

```csharp
public LinuxFunctionAppAuthSettings AuthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#auth_settings LinuxFunctionApp#auth_settings}

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.backup"></a>

```csharp
public LinuxFunctionAppBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#backup LinuxFunctionApp#backup}

---

##### `BuiltinLoggingEnabled`<sup>Optional</sup> <a name="BuiltinLoggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.builtinLoggingEnabled"></a>

```csharp
public object BuiltinLoggingEnabled { get; set; }
```

- *Type:* object

Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#builtin_logging_enabled LinuxFunctionApp#builtin_logging_enabled}

---

##### `ClientCertificateEnabled`<sup>Optional</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateEnabled"></a>

```csharp
public object ClientCertificateEnabled { get; set; }
```

- *Type:* object

Should the function app use Client Certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_certificate_enabled LinuxFunctionApp#client_certificate_enabled}

---

##### `ClientCertificateExclusionPaths`<sup>Optional</sup> <a name="ClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateExclusionPaths"></a>

```csharp
public string ClientCertificateExclusionPaths { get; set; }
```

- *Type:* string

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_certificate_exclusion_paths LinuxFunctionApp#client_certificate_exclusion_paths}

---

##### `ClientCertificateMode`<sup>Optional</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.clientCertificateMode"></a>

```csharp
public string ClientCertificateMode { get; set; }
```

- *Type:* string

The mode of the Function App's client certificates requirement for incoming requests.

Possible values are `Required`, `Optional`, and `OptionalInteractiveUser`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#client_certificate_mode LinuxFunctionApp#client_certificate_mode}

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.connectionString"></a>

```csharp
public object ConnectionString { get; set; }
```

- *Type:* object

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#connection_string LinuxFunctionApp#connection_string}

---

##### `ContentShareForceDisabled`<sup>Optional</sup> <a name="ContentShareForceDisabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.contentShareForceDisabled"></a>

```csharp
public object ContentShareForceDisabled { get; set; }
```

- *Type:* object

Force disable the content share settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#content_share_force_disabled LinuxFunctionApp#content_share_force_disabled}

---

##### `DailyMemoryTimeQuota`<sup>Optional</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; set; }
```

- *Type:* double

The amount of memory in gigabyte-seconds that your application is allowed to consume per day.

Setting this value only affects function apps in Consumption Plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#daily_memory_time_quota LinuxFunctionApp#daily_memory_time_quota}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Is the Linux Function App enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#enabled LinuxFunctionApp#enabled}

---

##### `FunctionsExtensionVersion`<sup>Optional</sup> <a name="FunctionsExtensionVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.functionsExtensionVersion"></a>

```csharp
public string FunctionsExtensionVersion { get; set; }
```

- *Type:* string

The runtime version associated with the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#functions_extension_version LinuxFunctionApp#functions_extension_version}

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; set; }
```

- *Type:* object

Can the Function App only be accessed via HTTPS?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#https_only LinuxFunctionApp#https_only}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#id LinuxFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.identity"></a>

```csharp
public LinuxFunctionAppIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#identity LinuxFunctionApp#identity}

---

##### `KeyVaultReferenceIdentityId`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```csharp
public string KeyVaultReferenceIdentityId { get; set; }
```

- *Type:* string

The User Assigned Identity to use for Key Vault access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#key_vault_reference_identity_id LinuxFunctionApp#key_vault_reference_identity_id}

---

##### `StickySettings`<sup>Optional</sup> <a name="StickySettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.stickySettings"></a>

```csharp
public LinuxFunctionAppStickySettings StickySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#sticky_settings LinuxFunctionApp#sticky_settings}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccount"></a>

```csharp
public object StorageAccount { get; set; }
```

- *Type:* object

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_account LinuxFunctionApp#storage_account}

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

The access key which will be used to access the storage account for the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_account_access_key LinuxFunctionApp#storage_account_access_key}

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

The backend storage account name which will be used by this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_account_name LinuxFunctionApp#storage_account_name}

---

##### `StorageKeyVaultSecretId`<sup>Optional</sup> <a name="StorageKeyVaultSecretId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageKeyVaultSecretId"></a>

```csharp
public string StorageKeyVaultSecretId { get; set; }
```

- *Type:* string

The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_key_vault_secret_id LinuxFunctionApp#storage_key_vault_secret_id}

---

##### `StorageUsesManagedIdentity`<sup>Optional</sup> <a name="StorageUsesManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.storageUsesManagedIdentity"></a>

```csharp
public object StorageUsesManagedIdentity { get; set; }
```

- *Type:* object

Should the Function App use its Managed Identity to access storage?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#storage_uses_managed_identity LinuxFunctionApp#storage_uses_managed_identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#tags LinuxFunctionApp#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.timeouts"></a>

```csharp
public LinuxFunctionAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts">LinuxFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#timeouts LinuxFunctionApp#timeouts}

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConfig.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}.

---

### LinuxFunctionAppConnectionString <a name="LinuxFunctionAppConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppConnectionString {
    string Name,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.name">Name</a></code> | <code>string</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.type">Type</a></code> | <code>string</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.value">Value</a></code> | <code>string</code> | The connection string value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#type LinuxFunctionApp#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#value LinuxFunctionApp#value}

---

### LinuxFunctionAppIdentity <a name="LinuxFunctionAppIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#type LinuxFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#identity_ids LinuxFunctionApp#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#type LinuxFunctionApp#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#identity_ids LinuxFunctionApp#identity_ids}.

---

### LinuxFunctionAppSiteConfig <a name="LinuxFunctionAppSiteConfig" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfig {
    object AlwaysOn = null,
    string ApiDefinitionUrl = null,
    string ApiManagementApiId = null,
    string AppCommandLine = null,
    string ApplicationInsightsConnectionString = null,
    string ApplicationInsightsKey = null,
    LinuxFunctionAppSiteConfigApplicationStack ApplicationStack = null,
    double AppScaleLimit = null,
    LinuxFunctionAppSiteConfigAppServiceLogs AppServiceLogs = null,
    string ContainerRegistryManagedIdentityClientId = null,
    object ContainerRegistryUseManagedIdentity = null,
    LinuxFunctionAppSiteConfigCors Cors = null,
    string[] DefaultDocuments = null,
    double ElasticInstanceMinimum = null,
    string FtpsState = null,
    double HealthCheckEvictionTimeInMin = null,
    string HealthCheckPath = null,
    object Http2Enabled = null,
    object IpRestriction = null,
    string LoadBalancingMode = null,
    string ManagedPipelineMode = null,
    string MinimumTlsVersion = null,
    double PreWarmedInstanceCount = null,
    object RemoteDebuggingEnabled = null,
    string RemoteDebuggingVersion = null,
    object RuntimeScaleMonitoringEnabled = null,
    object ScmIpRestriction = null,
    string ScmMinimumTlsVersion = null,
    object ScmUseMainIpRestriction = null,
    object Use32BitWorker = null,
    object VnetRouteAllEnabled = null,
    object WebsocketsEnabled = null,
    double WorkerCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | If this Linux Web App is Always On enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.apiDefinitionUrl">ApiDefinitionUrl</a></code> | <code>string</code> | The URL of the API definition that describes this Linux Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.apiManagementApiId">ApiManagementApiId</a></code> | <code>string</code> | The ID of the API Management API for this Linux Function App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appCommandLine">AppCommandLine</a></code> | <code>string</code> | The program and any arguments used to launch this app via the command line. (Example `node myapp.js`). |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationInsightsConnectionString">ApplicationInsightsConnectionString</a></code> | <code>string</code> | The Connection String for linking the Linux Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationInsightsKey">ApplicationInsightsKey</a></code> | <code>string</code> | The Instrumentation Key for connecting the Linux Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationStack">ApplicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | The number of workers this function app can scale out to. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appServiceLogs">AppServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a></code> | app_service_logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.containerRegistryManagedIdentityClientId">ContainerRegistryManagedIdentityClientId</a></code> | <code>string</code> | The Client ID of the Managed Service Identity to use for connections to the Azure Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.containerRegistryUseManagedIdentity">ContainerRegistryUseManagedIdentity</a></code> | <code>object</code> | Should connections for Azure Container Registry use Managed Identity. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.defaultDocuments">DefaultDocuments</a></code> | <code>string[]</code> | Specifies a list of Default Documents for the Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | The number of minimum instances for this Linux Function App. Only affects apps on Elastic Premium plans. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.ftpsState">FtpsState</a></code> | <code>string</code> | State of FTP / FTPS service for this function app. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin">HealthCheckEvictionTimeInMin</a></code> | <code>double</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | The path to be checked for this function app health. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Specifies if the http2 protocol should be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_restriction LinuxFunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.loadBalancingMode">LoadBalancingMode</a></code> | <code>string</code> | The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>string</code> | The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | The configures the minimum version of TLS required for SSL requests. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>object</code> | Should Remote Debugging be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>string</code> | The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022``. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | Should Functions Runtime Scale Monitoring be enabled. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#scm_ip_restriction LinuxFunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmMinimumTlsVersion">ScmMinimumTlsVersion</a></code> | <code>string</code> | Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | Should the Linux Function App `ip_restriction` configuration be used for the SCM also. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.use32BitWorker">Use32BitWorker</a></code> | <code>object</code> | Should the Linux Web App use a 32-bit worker. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | Should Web Sockets be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.workerCount">WorkerCount</a></code> | <code>double</code> | The number of Workers for this Linux Function App. |

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; set; }
```

- *Type:* object

If this Linux Web App is Always On enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#always_on LinuxFunctionApp#always_on}

---

##### `ApiDefinitionUrl`<sup>Optional</sup> <a name="ApiDefinitionUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.apiDefinitionUrl"></a>

```csharp
public string ApiDefinitionUrl { get; set; }
```

- *Type:* string

The URL of the API definition that describes this Linux Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#api_definition_url LinuxFunctionApp#api_definition_url}

---

##### `ApiManagementApiId`<sup>Optional</sup> <a name="ApiManagementApiId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.apiManagementApiId"></a>

```csharp
public string ApiManagementApiId { get; set; }
```

- *Type:* string

The ID of the API Management API for this Linux Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#api_management_api_id LinuxFunctionApp#api_management_api_id}

---

##### `AppCommandLine`<sup>Optional</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appCommandLine"></a>

```csharp
public string AppCommandLine { get; set; }
```

- *Type:* string

The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_command_line LinuxFunctionApp#app_command_line}

---

##### `ApplicationInsightsConnectionString`<sup>Optional</sup> <a name="ApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationInsightsConnectionString"></a>

```csharp
public string ApplicationInsightsConnectionString { get; set; }
```

- *Type:* string

The Connection String for linking the Linux Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#application_insights_connection_string LinuxFunctionApp#application_insights_connection_string}

---

##### `ApplicationInsightsKey`<sup>Optional</sup> <a name="ApplicationInsightsKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationInsightsKey"></a>

```csharp
public string ApplicationInsightsKey { get; set; }
```

- *Type:* string

The Instrumentation Key for connecting the Linux Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#application_insights_key LinuxFunctionApp#application_insights_key}

---

##### `ApplicationStack`<sup>Optional</sup> <a name="ApplicationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.applicationStack"></a>

```csharp
public LinuxFunctionAppSiteConfigApplicationStack ApplicationStack { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#application_stack LinuxFunctionApp#application_stack}

---

##### `AppScaleLimit`<sup>Optional</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; set; }
```

- *Type:* double

The number of workers this function app can scale out to.

Only applicable to apps on the Consumption and Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_scale_limit LinuxFunctionApp#app_scale_limit}

---

##### `AppServiceLogs`<sup>Optional</sup> <a name="AppServiceLogs" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.appServiceLogs"></a>

```csharp
public LinuxFunctionAppSiteConfigAppServiceLogs AppServiceLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a>

app_service_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_service_logs LinuxFunctionApp#app_service_logs}

---

##### `ContainerRegistryManagedIdentityClientId`<sup>Optional</sup> <a name="ContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.containerRegistryManagedIdentityClientId"></a>

```csharp
public string ContainerRegistryManagedIdentityClientId { get; set; }
```

- *Type:* string

The Client ID of the Managed Service Identity to use for connections to the Azure Container Registry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#container_registry_managed_identity_client_id LinuxFunctionApp#container_registry_managed_identity_client_id}

---

##### `ContainerRegistryUseManagedIdentity`<sup>Optional</sup> <a name="ContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.containerRegistryUseManagedIdentity"></a>

```csharp
public object ContainerRegistryUseManagedIdentity { get; set; }
```

- *Type:* object

Should connections for Azure Container Registry use Managed Identity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#container_registry_use_managed_identity LinuxFunctionApp#container_registry_use_managed_identity}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.cors"></a>

```csharp
public LinuxFunctionAppSiteConfigCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#cors LinuxFunctionApp#cors}

---

##### `DefaultDocuments`<sup>Optional</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.defaultDocuments"></a>

```csharp
public string[] DefaultDocuments { get; set; }
```

- *Type:* string[]

Specifies a list of Default Documents for the Linux Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#default_documents LinuxFunctionApp#default_documents}

---

##### `ElasticInstanceMinimum`<sup>Optional</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; set; }
```

- *Type:* double

The number of minimum instances for this Linux Function App. Only affects apps on Elastic Premium plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#elastic_instance_minimum LinuxFunctionApp#elastic_instance_minimum}

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.ftpsState"></a>

```csharp
public string FtpsState { get; set; }
```

- *Type:* string

State of FTP / FTPS service for this function app.

Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ftps_state LinuxFunctionApp#ftps_state}

---

##### `HealthCheckEvictionTimeInMin`<sup>Optional</sup> <a name="HealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```csharp
public double HealthCheckEvictionTimeInMin { get; set; }
```

- *Type:* double

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#health_check_eviction_time_in_min LinuxFunctionApp#health_check_eviction_time_in_min}

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

The path to be checked for this function app health.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#health_check_path LinuxFunctionApp#health_check_path}

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Specifies if the http2 protocol should be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#http2_enabled LinuxFunctionApp#http2_enabled}

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.ipRestriction"></a>

```csharp
public object IpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_restriction LinuxFunctionApp#ip_restriction}.

---

##### `LoadBalancingMode`<sup>Optional</sup> <a name="LoadBalancingMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.loadBalancingMode"></a>

```csharp
public string LoadBalancingMode { get; set; }
```

- *Type:* string

The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#load_balancing_mode LinuxFunctionApp#load_balancing_mode}

---

##### `ManagedPipelineMode`<sup>Optional</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.managedPipelineMode"></a>

```csharp
public string ManagedPipelineMode { get; set; }
```

- *Type:* string

The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#managed_pipeline_mode LinuxFunctionApp#managed_pipeline_mode}

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; set; }
```

- *Type:* string

The configures the minimum version of TLS required for SSL requests.

Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#minimum_tls_version LinuxFunctionApp#minimum_tls_version}

---

##### `PreWarmedInstanceCount`<sup>Optional</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; set; }
```

- *Type:* double

The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#pre_warmed_instance_count LinuxFunctionApp#pre_warmed_instance_count}

---

##### `RemoteDebuggingEnabled`<sup>Optional</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.remoteDebuggingEnabled"></a>

```csharp
public object RemoteDebuggingEnabled { get; set; }
```

- *Type:* object

Should Remote Debugging be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#remote_debugging_enabled LinuxFunctionApp#remote_debugging_enabled}

---

##### `RemoteDebuggingVersion`<sup>Optional</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.remoteDebuggingVersion"></a>

```csharp
public string RemoteDebuggingVersion { get; set; }
```

- *Type:* string

The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022``.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#remote_debugging_version LinuxFunctionApp#remote_debugging_version}

---

##### `RuntimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; set; }
```

- *Type:* object

Should Functions Runtime Scale Monitoring be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#runtime_scale_monitoring_enabled LinuxFunctionApp#runtime_scale_monitoring_enabled}

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmIpRestriction"></a>

```csharp
public object ScmIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#scm_ip_restriction LinuxFunctionApp#scm_ip_restriction}.

---

##### `ScmMinimumTlsVersion`<sup>Optional</sup> <a name="ScmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmMinimumTlsVersion"></a>

```csharp
public string ScmMinimumTlsVersion { get; set; }
```

- *Type:* string

Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#scm_minimum_tls_version LinuxFunctionApp#scm_minimum_tls_version}

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; set; }
```

- *Type:* object

Should the Linux Function App `ip_restriction` configuration be used for the SCM also.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#scm_use_main_ip_restriction LinuxFunctionApp#scm_use_main_ip_restriction}

---

##### `Use32BitWorker`<sup>Optional</sup> <a name="Use32BitWorker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.use32BitWorker"></a>

```csharp
public object Use32BitWorker { get; set; }
```

- *Type:* object

Should the Linux Web App use a 32-bit worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#use_32_bit_worker LinuxFunctionApp#use_32_bit_worker}

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; set; }
```

- *Type:* object

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#vnet_route_all_enabled LinuxFunctionApp#vnet_route_all_enabled}

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; set; }
```

- *Type:* object

Should Web Sockets be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#websockets_enabled LinuxFunctionApp#websockets_enabled}

---

##### `WorkerCount`<sup>Optional</sup> <a name="WorkerCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig.property.workerCount"></a>

```csharp
public double WorkerCount { get; set; }
```

- *Type:* double

The number of Workers for this Linux Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#worker_count LinuxFunctionApp#worker_count}

---

### LinuxFunctionAppSiteConfigApplicationStack <a name="LinuxFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigApplicationStack {
    object Docker = null,
    string DotnetVersion = null,
    string JavaVersion = null,
    string NodeVersion = null,
    string PowershellCoreVersion = null,
    string PythonVersion = null,
    object UseCustomRuntime = null,
    object UseDotnetIsolatedRuntime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.docker">Docker</a></code> | <code>object</code> | docker block. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.dotnetVersion">DotnetVersion</a></code> | <code>string</code> | The version of .Net. Possible values are `3.1`, `6.0` and `7.0`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.javaVersion">JavaVersion</a></code> | <code>string</code> | The version of Java to use. Possible values are `8`, `11`, and `17`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | The version of Node to use. Possible values include `12`, and `14`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion">PowershellCoreVersion</a></code> | <code>string</code> | The version of PowerShell Core to use. Possibles values are `7`, and `7.2`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | The version of Python to use. Possible values include `3.9`, `3.8`, and `3.7`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.useCustomRuntime">UseCustomRuntime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#use_custom_runtime LinuxFunctionApp#use_custom_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime">UseDotnetIsolatedRuntime</a></code> | <code>object</code> | Should the DotNet process use an isolated runtime. Defaults to `false`. |

---

##### `Docker`<sup>Optional</sup> <a name="Docker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.docker"></a>

```csharp
public object Docker { get; set; }
```

- *Type:* object

docker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#docker LinuxFunctionApp#docker}

---

##### `DotnetVersion`<sup>Optional</sup> <a name="DotnetVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.dotnetVersion"></a>

```csharp
public string DotnetVersion { get; set; }
```

- *Type:* string

The version of .Net. Possible values are `3.1`, `6.0` and `7.0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#dotnet_version LinuxFunctionApp#dotnet_version}

---

##### `JavaVersion`<sup>Optional</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.javaVersion"></a>

```csharp
public string JavaVersion { get; set; }
```

- *Type:* string

The version of Java to use. Possible values are `8`, `11`, and `17`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#java_version LinuxFunctionApp#java_version}

---

##### `NodeVersion`<sup>Optional</sup> <a name="NodeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; set; }
```

- *Type:* string

The version of Node to use. Possible values include `12`, and `14`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#node_version LinuxFunctionApp#node_version}

---

##### `PowershellCoreVersion`<sup>Optional</sup> <a name="PowershellCoreVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion"></a>

```csharp
public string PowershellCoreVersion { get; set; }
```

- *Type:* string

The version of PowerShell Core to use. Possibles values are `7`, and `7.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#powershell_core_version LinuxFunctionApp#powershell_core_version}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; set; }
```

- *Type:* string

The version of Python to use. Possible values include `3.9`, `3.8`, and `3.7`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#python_version LinuxFunctionApp#python_version}

---

##### `UseCustomRuntime`<sup>Optional</sup> <a name="UseCustomRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.useCustomRuntime"></a>

```csharp
public object UseCustomRuntime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#use_custom_runtime LinuxFunctionApp#use_custom_runtime}.

---

##### `UseDotnetIsolatedRuntime`<sup>Optional</sup> <a name="UseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime"></a>

```csharp
public object UseDotnetIsolatedRuntime { get; set; }
```

- *Type:* object

Should the DotNet process use an isolated runtime. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#use_dotnet_isolated_runtime LinuxFunctionApp#use_dotnet_isolated_runtime}

---

### LinuxFunctionAppSiteConfigApplicationStackDocker <a name="LinuxFunctionAppSiteConfigApplicationStackDocker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigApplicationStackDocker {
    string ImageName,
    string ImageTag,
    string RegistryUrl,
    string RegistryPassword = null,
    string RegistryUsername = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.imageName">ImageName</a></code> | <code>string</code> | The name of the Docker image to use. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.imageTag">ImageTag</a></code> | <code>string</code> | The image tag of the image to use. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | The URL of the docker registry. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | The password for the account to use to connect to the registry. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | The username to use for connections to the registry. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

The name of the Docker image to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#image_name LinuxFunctionApp#image_name}

---

##### `ImageTag`<sup>Required</sup> <a name="ImageTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.imageTag"></a>

```csharp
public string ImageTag { get; set; }
```

- *Type:* string

The image tag of the image to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#image_tag LinuxFunctionApp#image_tag}

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; set; }
```

- *Type:* string

The URL of the docker registry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#registry_url LinuxFunctionApp#registry_url}

---

##### `RegistryPassword`<sup>Optional</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; set; }
```

- *Type:* string

The password for the account to use to connect to the registry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#registry_password LinuxFunctionApp#registry_password}

---

##### `RegistryUsername`<sup>Optional</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDocker.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; set; }
```

- *Type:* string

The username to use for connections to the registry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#registry_username LinuxFunctionApp#registry_username}

---

### LinuxFunctionAppSiteConfigAppServiceLogs <a name="LinuxFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigAppServiceLogs {
    double DiskQuotaMb = null,
    double RetentionPeriodDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb">DiskQuotaMb</a></code> | <code>double</code> | The amount of disk space to use for logs. Valid values are between `25` and `100`. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete). |

---

##### `DiskQuotaMb`<sup>Optional</sup> <a name="DiskQuotaMb" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb"></a>

```csharp
public double DiskQuotaMb { get; set; }
```

- *Type:* double

The amount of disk space to use for logs. Valid values are between `25` and `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#disk_quota_mb LinuxFunctionApp#disk_quota_mb}

---

##### `RetentionPeriodDays`<sup>Optional</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; set; }
```

- *Type:* double

The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#retention_period_days LinuxFunctionApp#retention_period_days}

---

### LinuxFunctionAppSiteConfigCors <a name="LinuxFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigCors {
    string[] AllowedOrigins,
    object SupportCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#allowed_origins LinuxFunctionApp#allowed_origins}

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; set; }
```

- *Type:* object

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#support_credentials LinuxFunctionApp#support_credentials}

---

### LinuxFunctionAppSiteConfigIpRestriction <a name="LinuxFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#action LinuxFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#headers LinuxFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_address LinuxFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#priority LinuxFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#service_tag LinuxFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#action LinuxFunctionApp#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#headers LinuxFunctionApp#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_address LinuxFunctionApp#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#priority LinuxFunctionApp#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#service_tag LinuxFunctionApp#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}.

---

### LinuxFunctionAppSiteConfigIpRestrictionHeaders <a name="LinuxFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_azure_fdid LinuxFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_fd_health_probe LinuxFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_for LinuxFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_host LinuxFunctionApp#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_azure_fdid LinuxFunctionApp#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_fd_health_probe LinuxFunctionApp#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_for LinuxFunctionApp#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_host LinuxFunctionApp#x_forwarded_host}.

---

### LinuxFunctionAppSiteConfigScmIpRestriction <a name="LinuxFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#action LinuxFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#headers LinuxFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_address LinuxFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#priority LinuxFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#service_tag LinuxFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#action LinuxFunctionApp#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#headers LinuxFunctionApp#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#ip_address LinuxFunctionApp#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#priority LinuxFunctionApp#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#service_tag LinuxFunctionApp#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#virtual_network_subnet_id LinuxFunctionApp#virtual_network_subnet_id}.

---

### LinuxFunctionAppSiteConfigScmIpRestrictionHeaders <a name="LinuxFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_azure_fdid LinuxFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_fd_health_probe LinuxFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_for LinuxFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_host LinuxFunctionApp#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_azure_fdid LinuxFunctionApp#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_fd_health_probe LinuxFunctionApp#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_for LinuxFunctionApp#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#x_forwarded_host LinuxFunctionApp#x_forwarded_host}.

---

### LinuxFunctionAppSiteCredential <a name="LinuxFunctionAppSiteCredential" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteCredential {

};
```


### LinuxFunctionAppStickySettings <a name="LinuxFunctionAppStickySettings" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppStickySettings {
    string[] AppSettingNames = null,
    string[] ConnectionStringNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings.property.appSettingNames">AppSettingNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_setting_names LinuxFunctionApp#app_setting_names}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings.property.connectionStringNames">ConnectionStringNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#connection_string_names LinuxFunctionApp#connection_string_names}. |

---

##### `AppSettingNames`<sup>Optional</sup> <a name="AppSettingNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings.property.appSettingNames"></a>

```csharp
public string[] AppSettingNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#app_setting_names LinuxFunctionApp#app_setting_names}.

---

##### `ConnectionStringNames`<sup>Optional</sup> <a name="ConnectionStringNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings.property.connectionStringNames"></a>

```csharp
public string[] ConnectionStringNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#connection_string_names LinuxFunctionApp#connection_string_names}.

---

### LinuxFunctionAppStorageAccount <a name="LinuxFunctionAppStorageAccount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppStorageAccount {
    string AccessKey,
    string AccountName,
    string Name,
    string ShareName,
    string Type,
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.accessKey">AccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#access_key LinuxFunctionApp#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#account_name LinuxFunctionApp#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.shareName">ShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#share_name LinuxFunctionApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#type LinuxFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#mount_path LinuxFunctionApp#mount_path}. |

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#access_key LinuxFunctionApp#access_key}.

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#account_name LinuxFunctionApp#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#name LinuxFunctionApp#name}.

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#share_name LinuxFunctionApp#share_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#type LinuxFunctionApp#type}.

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccount.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#mount_path LinuxFunctionApp#mount_path}.

---

### LinuxFunctionAppTimeouts <a name="LinuxFunctionAppTimeouts" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#create LinuxFunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#delete LinuxFunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#read LinuxFunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#update LinuxFunctionApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#create LinuxFunctionApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#delete LinuxFunctionApp#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#read LinuxFunctionApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_function_app#update LinuxFunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">ResetClientSecretSettingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```csharp
private void ResetAllowedAudiences()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretSettingName` <a name="ResetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```csharp
private void ResetClientSecretSettingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">ClientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```csharp
public string[] AllowedAudiencesInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSettingNameInput`<sup>Optional</sup> <a name="ClientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```csharp
public string ClientSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a>

---


### LinuxFunctionAppAuthSettingsFacebookOutputReference <a name="LinuxFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsFacebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret">ResetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName">ResetAppSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSecret` <a name="ResetAppSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```csharp
private void ResetAppSecret()
```

##### `ResetAppSecretSettingName` <a name="ResetAppSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```csharp
private void ResetAppSecretSettingName()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">AppSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```csharp
public string AppSecretInput { get; }
```

- *Type:* string

---

##### `AppSecretSettingNameInput`<sup>Optional</sup> <a name="AppSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```csharp
public string AppSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```csharp
public string AppSecret { get; }
```

- *Type:* string

---

##### `AppSecretSettingName`<sup>Required</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```csharp
public string AppSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsFacebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a>

---


### LinuxFunctionAppAuthSettingsGithubOutputReference <a name="LinuxFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName">ResetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretSettingName` <a name="ResetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```csharp
private void ResetClientSecretSettingName()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">ClientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSettingNameInput`<sup>Optional</sup> <a name="ClientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```csharp
public string ClientSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a>

---


### LinuxFunctionAppAuthSettingsGoogleOutputReference <a name="LinuxFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsGoogleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName">ResetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretSettingName` <a name="ResetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```csharp
private void ResetClientSecretSettingName()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">ClientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSettingNameInput`<sup>Optional</sup> <a name="ClientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```csharp
public string ClientSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsGoogle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a>

---


### LinuxFunctionAppAuthSettingsMicrosoftOutputReference <a name="LinuxFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsMicrosoftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">ResetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretSettingName` <a name="ResetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```csharp
private void ResetClientSecretSettingName()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">ClientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSettingNameInput`<sup>Optional</sup> <a name="ClientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```csharp
public string ClientSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsMicrosoft InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a>

---


### LinuxFunctionAppAuthSettingsOutputReference <a name="LinuxFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putFacebook">PutFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGoogle">PutGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putMicrosoft">PutMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putTwitter">PutTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters">ResetAdditionalLoginParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">ResetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetDefaultProvider">ResetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetFacebook">ResetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetGoogle">ResetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetMicrosoft">ResetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">ResetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">ResetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTwitter">ResetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">ResetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(LinuxFunctionAppAuthSettingsActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a>

---

##### `PutFacebook` <a name="PutFacebook" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putFacebook"></a>

```csharp
private void PutFacebook(LinuxFunctionAppAuthSettingsFacebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGithub"></a>

```csharp
private void PutGithub(LinuxFunctionAppAuthSettingsGithub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a>

---

##### `PutGoogle` <a name="PutGoogle" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGoogle"></a>

```csharp
private void PutGoogle(LinuxFunctionAppAuthSettingsGoogle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a>

---

##### `PutMicrosoft` <a name="PutMicrosoft" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```csharp
private void PutMicrosoft(LinuxFunctionAppAuthSettingsMicrosoft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a>

---

##### `PutTwitter` <a name="PutTwitter" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putTwitter"></a>

```csharp
private void PutTwitter(LinuxFunctionAppAuthSettingsTwitter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetAdditionalLoginParameters` <a name="ResetAdditionalLoginParameters" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```csharp
private void ResetAdditionalLoginParameters()
```

##### `ResetAllowedExternalRedirectUrls` <a name="ResetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```csharp
private void ResetAllowedExternalRedirectUrls()
```

##### `ResetDefaultProvider` <a name="ResetDefaultProvider" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```csharp
private void ResetDefaultProvider()
```

##### `ResetFacebook` <a name="ResetFacebook" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```csharp
private void ResetFacebook()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGoogle` <a name="ResetGoogle" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```csharp
private void ResetGoogle()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetMicrosoft` <a name="ResetMicrosoft" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```csharp
private void ResetMicrosoft()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```

##### `ResetTokenRefreshExtensionHours` <a name="ResetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```csharp
private void ResetTokenRefreshExtensionHours()
```

##### `ResetTokenStoreEnabled` <a name="ResetTokenStoreEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```csharp
private void ResetTokenStoreEnabled()
```

##### `ResetTwitter` <a name="ResetTwitter" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```csharp
private void ResetTwitter()
```

##### `ResetUnauthenticatedClientAction` <a name="ResetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```csharp
private void ResetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference">LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference">LinuxFunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference">LinuxFunctionAppAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference">LinuxFunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference">LinuxFunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference">LinuxFunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput">AdditionalLoginParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">AllowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.defaultProviderInput">DefaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.facebookInput">FacebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.githubInput">GithubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.googleInput">GoogleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.microsoftInput">MicrosoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">TokenRefreshExtensionHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">TokenStoreEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.twitterInput">TwitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">UnauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">AdditionalLoginParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```csharp
public LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference">LinuxFunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```csharp
public LinuxFunctionAppAuthSettingsFacebookOutputReference Facebook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebookOutputReference">LinuxFunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.github"></a>

```csharp
public LinuxFunctionAppAuthSettingsGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithubOutputReference">LinuxFunctionAppAuthSettingsGithubOutputReference</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.google"></a>

```csharp
public LinuxFunctionAppAuthSettingsGoogleOutputReference Google { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogleOutputReference">LinuxFunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```csharp
public LinuxFunctionAppAuthSettingsMicrosoftOutputReference Microsoft { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoftOutputReference">LinuxFunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```csharp
public LinuxFunctionAppAuthSettingsTwitterOutputReference Twitter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference">LinuxFunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsActiveDirectory">LinuxFunctionAppAuthSettingsActiveDirectory</a>

---

##### `AdditionalLoginParametersInput`<sup>Optional</sup> <a name="AdditionalLoginParametersInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```csharp
public string[] AllowedExternalRedirectUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultProviderInput`<sup>Optional</sup> <a name="DefaultProviderInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```csharp
public string DefaultProviderInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FacebookInput`<sup>Optional</sup> <a name="FacebookInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsFacebook FacebookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsFacebook">LinuxFunctionAppAuthSettingsFacebook</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.githubInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsGithub GithubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGithub">LinuxFunctionAppAuthSettingsGithub</a>

---

##### `GoogleInput`<sup>Optional</sup> <a name="GoogleInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsGoogle GoogleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsGoogle">LinuxFunctionAppAuthSettingsGoogle</a>

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `MicrosoftInput`<sup>Optional</sup> <a name="MicrosoftInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsMicrosoft MicrosoftInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsMicrosoft">LinuxFunctionAppAuthSettingsMicrosoft</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="TokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```csharp
public double TokenRefreshExtensionHoursInput { get; }
```

- *Type:* double

---

##### `TokenStoreEnabledInput`<sup>Optional</sup> <a name="TokenStoreEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```csharp
public object TokenStoreEnabledInput { get; }
```

- *Type:* object

---

##### `TwitterInput`<sup>Optional</sup> <a name="TwitterInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```csharp
public LinuxFunctionAppAuthSettingsTwitter TwitterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a>

---

##### `UnauthenticatedClientActionInput`<sup>Optional</sup> <a name="UnauthenticatedClientActionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```csharp
public string UnauthenticatedClientActionInput { get; }
```

- *Type:* string

---

##### `AdditionalLoginParameters`<sup>Required</sup> <a name="AdditionalLoginParameters" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; }
```

- *Type:* string[]

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; }
```

- *Type:* double

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; }
```

- *Type:* object

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettings">LinuxFunctionAppAuthSettings</a>

---


### LinuxFunctionAppAuthSettingsTwitterOutputReference <a name="LinuxFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppAuthSettingsTwitterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret">ResetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">ResetConsumerSecretSettingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsumerSecret` <a name="ResetConsumerSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```csharp
private void ResetConsumerSecret()
```

##### `ResetConsumerSecretSettingName` <a name="ResetConsumerSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```csharp
private void ResetConsumerSecretSettingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">ConsumerSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretSettingNameInput`<sup>Optional</sup> <a name="ConsumerSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```csharp
public string ConsumerSecretSettingNameInput { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `ConsumerSecretSettingName`<sup>Required</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```csharp
public string ConsumerSecretSettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppAuthSettingsTwitter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppAuthSettingsTwitter">LinuxFunctionAppAuthSettingsTwitter</a>

---


### LinuxFunctionAppBackupOutputReference <a name="LinuxFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(LinuxFunctionAppBackupSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference">LinuxFunctionAppBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.storageAccountUrlInput">StorageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.schedule"></a>

```csharp
public LinuxFunctionAppBackupScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference">LinuxFunctionAppBackupScheduleOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.scheduleInput"></a>

```csharp
public LinuxFunctionAppBackupSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a>

---

##### `StorageAccountUrlInput`<sup>Optional</sup> <a name="StorageAccountUrlInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.storageAccountUrlInput"></a>

```csharp
public string StorageAccountUrlInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountUrl`<sup>Required</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```csharp
public string StorageAccountUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackup">LinuxFunctionAppBackup</a>

---


### LinuxFunctionAppBackupScheduleOutputReference <a name="LinuxFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup">ResetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays">ResetRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepAtLeastOneBackup` <a name="ResetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```csharp
private void ResetKeepAtLeastOneBackup()
```

##### `ResetRetentionPeriodDays` <a name="ResetRetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```csharp
private void ResetRetentionPeriodDays()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">LastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput">FrequencyUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">KeepAtLeastOneBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnit">FrequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">KeepAtLeastOneBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastExecutionTime`<sup>Required</sup> <a name="LastExecutionTime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```csharp
public string LastExecutionTime { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `FrequencyUnitInput`<sup>Optional</sup> <a name="FrequencyUnitInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```csharp
public string FrequencyUnitInput { get; }
```

- *Type:* string

---

##### `KeepAtLeastOneBackupInput`<sup>Optional</sup> <a name="KeepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```csharp
public object KeepAtLeastOneBackupInput { get; }
```

- *Type:* object

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```csharp
public double RetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyUnit`<sup>Required</sup> <a name="FrequencyUnit" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```csharp
public string FrequencyUnit { get; }
```

- *Type:* string

---

##### `KeepAtLeastOneBackup`<sup>Required</sup> <a name="KeepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```csharp
public object KeepAtLeastOneBackup { get; }
```

- *Type:* object

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppBackupSchedule">LinuxFunctionAppBackupSchedule</a>

---


### LinuxFunctionAppConnectionStringList <a name="LinuxFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.get"></a>

```csharp
private LinuxFunctionAppConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppConnectionStringOutputReference <a name="LinuxFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppIdentityOutputReference <a name="LinuxFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentityOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppIdentity">LinuxFunctionAppIdentity</a>

---


### LinuxFunctionAppSiteConfigApplicationStackDockerList <a name="LinuxFunctionAppSiteConfigApplicationStackDockerList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigApplicationStackDockerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.get"></a>

```csharp
private LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference <a name="LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resetRegistryPassword">ResetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resetRegistryUsername">ResetRegistryUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryPassword` <a name="ResetRegistryPassword" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resetRegistryPassword"></a>

```csharp
private void ResetRegistryPassword()
```

##### `ResetRegistryUsername` <a name="ResetRegistryUsername" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resetRegistryUsername"></a>

```csharp
private void ResetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTagInput">ImageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPasswordInput">RegistryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrlInput">RegistryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsernameInput">RegistryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTag">ImageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImageTagInput`<sup>Optional</sup> <a name="ImageTagInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTagInput"></a>

```csharp
public string ImageTagInput { get; }
```

- *Type:* string

---

##### `RegistryPasswordInput`<sup>Optional</sup> <a name="RegistryPasswordInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPasswordInput"></a>

```csharp
public string RegistryPasswordInput { get; }
```

- *Type:* string

---

##### `RegistryUrlInput`<sup>Optional</sup> <a name="RegistryUrlInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrlInput"></a>

```csharp
public string RegistryUrlInput { get; }
```

- *Type:* string

---

##### `RegistryUsernameInput`<sup>Optional</sup> <a name="RegistryUsernameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsernameInput"></a>

```csharp
public string RegistryUsernameInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageTag`<sup>Required</sup> <a name="ImageTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTag"></a>

```csharp
public string ImageTag { get; }
```

- *Type:* string

---

##### `RegistryPassword`<sup>Required</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; }
```

- *Type:* string

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; }
```

- *Type:* string

---

##### `RegistryUsername`<sup>Required</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigApplicationStackOutputReference <a name="LinuxFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigApplicationStackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.putDocker">PutDocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetDocker">ResetDocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion">ResetDotnetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion">ResetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion">ResetNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion">ResetPowershellCoreVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime">ResetUseCustomRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime">ResetUseDotnetIsolatedRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocker` <a name="PutDocker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.putDocker"></a>

```csharp
private void PutDocker(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.putDocker.parameter.value"></a>

- *Type:* object

---

##### `ResetDocker` <a name="ResetDocker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetDocker"></a>

```csharp
private void ResetDocker()
```

##### `ResetDotnetVersion` <a name="ResetDotnetVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```csharp
private void ResetDotnetVersion()
```

##### `ResetJavaVersion` <a name="ResetJavaVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```csharp
private void ResetJavaVersion()
```

##### `ResetNodeVersion` <a name="ResetNodeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```csharp
private void ResetNodeVersion()
```

##### `ResetPowershellCoreVersion` <a name="ResetPowershellCoreVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion"></a>

```csharp
private void ResetPowershellCoreVersion()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetPythonVersion"></a>

```csharp
private void ResetPythonVersion()
```

##### `ResetUseCustomRuntime` <a name="ResetUseCustomRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime"></a>

```csharp
private void ResetUseCustomRuntime()
```

##### `ResetUseDotnetIsolatedRuntime` <a name="ResetUseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime"></a>

```csharp
private void ResetUseDotnetIsolatedRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.docker">Docker</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList">LinuxFunctionAppSiteConfigApplicationStackDockerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dockerInput">DockerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">DotnetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput">JavaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput">NodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput">PowershellCoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput">UseCustomRuntimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput">UseDotnetIsolatedRuntimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">DotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">PowershellCoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">UseCustomRuntime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">UseDotnetIsolatedRuntime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Docker`<sup>Required</sup> <a name="Docker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.docker"></a>

```csharp
public LinuxFunctionAppSiteConfigApplicationStackDockerList Docker { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackDockerList">LinuxFunctionAppSiteConfigApplicationStackDockerList</a>

---

##### `DockerInput`<sup>Optional</sup> <a name="DockerInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dockerInput"></a>

```csharp
public object DockerInput { get; }
```

- *Type:* object

---

##### `DotnetVersionInput`<sup>Optional</sup> <a name="DotnetVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```csharp
public string DotnetVersionInput { get; }
```

- *Type:* string

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```csharp
public string JavaVersionInput { get; }
```

- *Type:* string

---

##### `NodeVersionInput`<sup>Optional</sup> <a name="NodeVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```csharp
public string NodeVersionInput { get; }
```

- *Type:* string

---

##### `PowershellCoreVersionInput`<sup>Optional</sup> <a name="PowershellCoreVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput"></a>

```csharp
public string PowershellCoreVersionInput { get; }
```

- *Type:* string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersionInput"></a>

```csharp
public string PythonVersionInput { get; }
```

- *Type:* string

---

##### `UseCustomRuntimeInput`<sup>Optional</sup> <a name="UseCustomRuntimeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput"></a>

```csharp
public object UseCustomRuntimeInput { get; }
```

- *Type:* object

---

##### `UseDotnetIsolatedRuntimeInput`<sup>Optional</sup> <a name="UseDotnetIsolatedRuntimeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput"></a>

```csharp
public object UseDotnetIsolatedRuntimeInput { get; }
```

- *Type:* object

---

##### `DotnetVersion`<sup>Required</sup> <a name="DotnetVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```csharp
public string DotnetVersion { get; }
```

- *Type:* string

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; }
```

- *Type:* string

---

##### `PowershellCoreVersion`<sup>Required</sup> <a name="PowershellCoreVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```csharp
public string PowershellCoreVersion { get; }
```

- *Type:* string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; }
```

- *Type:* string

---

##### `UseCustomRuntime`<sup>Required</sup> <a name="UseCustomRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```csharp
public object UseCustomRuntime { get; }
```

- *Type:* object

---

##### `UseDotnetIsolatedRuntime`<sup>Required</sup> <a name="UseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```csharp
public object UseDotnetIsolatedRuntime { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppSiteConfigApplicationStack InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a>

---


### LinuxFunctionAppSiteConfigAppServiceLogsOutputReference <a name="LinuxFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigAppServiceLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb">ResetDiskQuotaMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays">ResetRetentionPeriodDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskQuotaMb` <a name="ResetDiskQuotaMb" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb"></a>

```csharp
private void ResetDiskQuotaMb()
```

##### `ResetRetentionPeriodDays` <a name="ResetRetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays"></a>

```csharp
private void ResetRetentionPeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput">DiskQuotaMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">DiskQuotaMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskQuotaMbInput`<sup>Optional</sup> <a name="DiskQuotaMbInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput"></a>

```csharp
public double DiskQuotaMbInput { get; }
```

- *Type:* double

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput"></a>

```csharp
public double RetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `DiskQuotaMb`<sup>Required</sup> <a name="DiskQuotaMb" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```csharp
public double DiskQuotaMb { get; }
```

- *Type:* double

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppSiteConfigAppServiceLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a>

---


### LinuxFunctionAppSiteConfigCorsOutputReference <a name="LinuxFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```csharp
private void ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```csharp
public object SupportCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppSiteConfigCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a>

---


### LinuxFunctionAppSiteConfigIpRestrictionHeadersList <a name="LinuxFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```csharp
private LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigIpRestrictionList <a name="LinuxFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.get"></a>

```csharp
private LinuxFunctionAppSiteConfigIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigIpRestrictionOutputReference <a name="LinuxFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList">LinuxFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```csharp
public LinuxFunctionAppSiteConfigIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionHeadersList">LinuxFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigOutputReference <a name="LinuxFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putApplicationStack">PutApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putAppServiceLogs">PutAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl">ResetApiDefinitionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApiManagementApiId">ResetApiManagementApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppCommandLine">ResetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString">ResetApplicationInsightsConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey">ResetApplicationInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationStack">ResetApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppScaleLimit">ResetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppServiceLogs">ResetAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId">ResetContainerRegistryManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity">ResetContainerRegistryUseManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetDefaultDocuments">ResetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">ResetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">ResetHealthCheckEvictionTimeInMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetLoadBalancingMode">ResetLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetManagedPipelineMode">ResetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">ResetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled">ResetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion">ResetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">ResetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion">ResetScmMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetUse32BitWorker">ResetUse32BitWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetWorkerCount">ResetWorkerCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationStack` <a name="PutApplicationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putApplicationStack"></a>

```csharp
private void PutApplicationStack(LinuxFunctionAppSiteConfigApplicationStack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a>

---

##### `PutAppServiceLogs` <a name="PutAppServiceLogs" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putAppServiceLogs"></a>

```csharp
private void PutAppServiceLogs(LinuxFunctionAppSiteConfigAppServiceLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putAppServiceLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putCors"></a>

```csharp
private void PutCors(LinuxFunctionAppSiteConfigCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```csharp
private void PutIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```csharp
private void PutScmIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```csharp
private void ResetAlwaysOn()
```

##### `ResetApiDefinitionUrl` <a name="ResetApiDefinitionUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```csharp
private void ResetApiDefinitionUrl()
```

##### `ResetApiManagementApiId` <a name="ResetApiManagementApiId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApiManagementApiId"></a>

```csharp
private void ResetApiManagementApiId()
```

##### `ResetAppCommandLine` <a name="ResetAppCommandLine" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppCommandLine"></a>

```csharp
private void ResetAppCommandLine()
```

##### `ResetApplicationInsightsConnectionString` <a name="ResetApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString"></a>

```csharp
private void ResetApplicationInsightsConnectionString()
```

##### `ResetApplicationInsightsKey` <a name="ResetApplicationInsightsKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey"></a>

```csharp
private void ResetApplicationInsightsKey()
```

##### `ResetApplicationStack` <a name="ResetApplicationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetApplicationStack"></a>

```csharp
private void ResetApplicationStack()
```

##### `ResetAppScaleLimit` <a name="ResetAppScaleLimit" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```csharp
private void ResetAppScaleLimit()
```

##### `ResetAppServiceLogs` <a name="ResetAppServiceLogs" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetAppServiceLogs"></a>

```csharp
private void ResetAppServiceLogs()
```

##### `ResetContainerRegistryManagedIdentityClientId` <a name="ResetContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId"></a>

```csharp
private void ResetContainerRegistryManagedIdentityClientId()
```

##### `ResetContainerRegistryUseManagedIdentity` <a name="ResetContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity"></a>

```csharp
private void ResetContainerRegistryUseManagedIdentity()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetDefaultDocuments` <a name="ResetDefaultDocuments" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetDefaultDocuments"></a>

```csharp
private void ResetDefaultDocuments()
```

##### `ResetElasticInstanceMinimum` <a name="ResetElasticInstanceMinimum" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```csharp
private void ResetElasticInstanceMinimum()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```csharp
private void ResetFtpsState()
```

##### `ResetHealthCheckEvictionTimeInMin` <a name="ResetHealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```csharp
private void ResetHealthCheckEvictionTimeInMin()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```csharp
private void ResetIpRestriction()
```

##### `ResetLoadBalancingMode` <a name="ResetLoadBalancingMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetLoadBalancingMode"></a>

```csharp
private void ResetLoadBalancingMode()
```

##### `ResetManagedPipelineMode` <a name="ResetManagedPipelineMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetManagedPipelineMode"></a>

```csharp
private void ResetManagedPipelineMode()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```csharp
private void ResetMinimumTlsVersion()
```

##### `ResetPreWarmedInstanceCount` <a name="ResetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```csharp
private void ResetPreWarmedInstanceCount()
```

##### `ResetRemoteDebuggingEnabled` <a name="ResetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```csharp
private void ResetRemoteDebuggingEnabled()
```

##### `ResetRemoteDebuggingVersion` <a name="ResetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```csharp
private void ResetRemoteDebuggingVersion()
```

##### `ResetRuntimeScaleMonitoringEnabled` <a name="ResetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```csharp
private void ResetRuntimeScaleMonitoringEnabled()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```csharp
private void ResetScmIpRestriction()
```

##### `ResetScmMinimumTlsVersion` <a name="ResetScmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```csharp
private void ResetScmMinimumTlsVersion()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```csharp
private void ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorker` <a name="ResetUse32BitWorker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetUse32BitWorker"></a>

```csharp
private void ResetUse32BitWorker()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```csharp
private void ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```csharp
private void ResetWebsocketsEnabled()
```

##### `ResetWorkerCount` <a name="ResetWorkerCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.resetWorkerCount"></a>

```csharp
private void ResetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationStack">ApplicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference">LinuxFunctionAppSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appServiceLogs">AppServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference">LinuxFunctionAppSiteConfigAppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference">LinuxFunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">DetailedErrorLoggingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList">LinuxFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList">LinuxFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput">ApiDefinitionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput">ApiManagementApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appCommandLineInput">AppCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput">ApplicationInsightsConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput">ApplicationInsightsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationStackInput">ApplicationStackInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appScaleLimitInput">AppScaleLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appServiceLogsInput">AppServiceLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput">ContainerRegistryManagedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput">ContainerRegistryUseManagedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput">DefaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">ElasticInstanceMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">HealthCheckEvictionTimeInMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput">LoadBalancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput">ManagedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">PreWarmedInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput">RemoteDebuggingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput">RemoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">RuntimeScaleMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput">ScmMinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput">Use32BitWorkerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">ApiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiId">ApiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appCommandLine">AppCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">ApplicationInsightsConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">ApplicationInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId">ContainerRegistryManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity">ContainerRegistryUseManagedIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.defaultDocuments">DefaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">HealthCheckEvictionTimeInMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.loadBalancingMode">LoadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">ScmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.use32BitWorker">Use32BitWorker</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationStack`<sup>Required</sup> <a name="ApplicationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```csharp
public LinuxFunctionAppSiteConfigApplicationStackOutputReference ApplicationStack { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStackOutputReference">LinuxFunctionAppSiteConfigApplicationStackOutputReference</a>

---

##### `AppServiceLogs`<sup>Required</sup> <a name="AppServiceLogs" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```csharp
public LinuxFunctionAppSiteConfigAppServiceLogsOutputReference AppServiceLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogsOutputReference">LinuxFunctionAppSiteConfigAppServiceLogsOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.cors"></a>

```csharp
public LinuxFunctionAppSiteConfigCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCorsOutputReference">LinuxFunctionAppSiteConfigCorsOutputReference</a>

---

##### `DetailedErrorLoggingEnabled`<sup>Required</sup> <a name="DetailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```csharp
public IResolvable DetailedErrorLoggingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```csharp
public LinuxFunctionAppSiteConfigIpRestrictionList IpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigIpRestrictionList">LinuxFunctionAppSiteConfigIpRestrictionList</a>

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; }
```

- *Type:* string

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```csharp
public LinuxFunctionAppSiteConfigScmIpRestrictionList ScmIpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList">LinuxFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```csharp
public object AlwaysOnInput { get; }
```

- *Type:* object

---

##### `ApiDefinitionUrlInput`<sup>Optional</sup> <a name="ApiDefinitionUrlInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```csharp
public string ApiDefinitionUrlInput { get; }
```

- *Type:* string

---

##### `ApiManagementApiIdInput`<sup>Optional</sup> <a name="ApiManagementApiIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```csharp
public string ApiManagementApiIdInput { get; }
```

- *Type:* string

---

##### `AppCommandLineInput`<sup>Optional</sup> <a name="AppCommandLineInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appCommandLineInput"></a>

```csharp
public string AppCommandLineInput { get; }
```

- *Type:* string

---

##### `ApplicationInsightsConnectionStringInput`<sup>Optional</sup> <a name="ApplicationInsightsConnectionStringInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput"></a>

```csharp
public string ApplicationInsightsConnectionStringInput { get; }
```

- *Type:* string

---

##### `ApplicationInsightsKeyInput`<sup>Optional</sup> <a name="ApplicationInsightsKeyInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput"></a>

```csharp
public string ApplicationInsightsKeyInput { get; }
```

- *Type:* string

---

##### `ApplicationStackInput`<sup>Optional</sup> <a name="ApplicationStackInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationStackInput"></a>

```csharp
public LinuxFunctionAppSiteConfigApplicationStack ApplicationStackInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigApplicationStack">LinuxFunctionAppSiteConfigApplicationStack</a>

---

##### `AppScaleLimitInput`<sup>Optional</sup> <a name="AppScaleLimitInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```csharp
public double AppScaleLimitInput { get; }
```

- *Type:* double

---

##### `AppServiceLogsInput`<sup>Optional</sup> <a name="AppServiceLogsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appServiceLogsInput"></a>

```csharp
public LinuxFunctionAppSiteConfigAppServiceLogs AppServiceLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigAppServiceLogs">LinuxFunctionAppSiteConfigAppServiceLogs</a>

---

##### `ContainerRegistryManagedIdentityClientIdInput`<sup>Optional</sup> <a name="ContainerRegistryManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput"></a>

```csharp
public string ContainerRegistryManagedIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `ContainerRegistryUseManagedIdentityInput`<sup>Optional</sup> <a name="ContainerRegistryUseManagedIdentityInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput"></a>

```csharp
public object ContainerRegistryUseManagedIdentityInput { get; }
```

- *Type:* object

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.corsInput"></a>

```csharp
public LinuxFunctionAppSiteConfigCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigCors">LinuxFunctionAppSiteConfigCors</a>

---

##### `DefaultDocumentsInput`<sup>Optional</sup> <a name="DefaultDocumentsInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```csharp
public string[] DefaultDocumentsInput { get; }
```

- *Type:* string[]

---

##### `ElasticInstanceMinimumInput`<sup>Optional</sup> <a name="ElasticInstanceMinimumInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```csharp
public double ElasticInstanceMinimumInput { get; }
```

- *Type:* double

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```csharp
public string FtpsStateInput { get; }
```

- *Type:* string

---

##### `HealthCheckEvictionTimeInMinInput`<sup>Optional</sup> <a name="HealthCheckEvictionTimeInMinInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```csharp
public double HealthCheckEvictionTimeInMinInput { get; }
```

- *Type:* double

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```csharp
public object IpRestrictionInput { get; }
```

- *Type:* object

---

##### `LoadBalancingModeInput`<sup>Optional</sup> <a name="LoadBalancingModeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```csharp
public string LoadBalancingModeInput { get; }
```

- *Type:* string

---

##### `ManagedPipelineModeInput`<sup>Optional</sup> <a name="ManagedPipelineModeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```csharp
public string ManagedPipelineModeInput { get; }
```

- *Type:* string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```csharp
public string MinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCountInput`<sup>Optional</sup> <a name="PreWarmedInstanceCountInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```csharp
public double PreWarmedInstanceCountInput { get; }
```

- *Type:* double

---

##### `RemoteDebuggingEnabledInput`<sup>Optional</sup> <a name="RemoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```csharp
public object RemoteDebuggingEnabledInput { get; }
```

- *Type:* object

---

##### `RemoteDebuggingVersionInput`<sup>Optional</sup> <a name="RemoteDebuggingVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```csharp
public string RemoteDebuggingVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```csharp
public object RuntimeScaleMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```csharp
public object ScmIpRestrictionInput { get; }
```

- *Type:* object

---

##### `ScmMinimumTlsVersionInput`<sup>Optional</sup> <a name="ScmMinimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```csharp
public string ScmMinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```csharp
public object ScmUseMainIpRestrictionInput { get; }
```

- *Type:* object

---

##### `Use32BitWorkerInput`<sup>Optional</sup> <a name="Use32BitWorkerInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```csharp
public object Use32BitWorkerInput { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```csharp
public object VnetRouteAllEnabledInput { get; }
```

- *Type:* object

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```csharp
public object WebsocketsEnabledInput { get; }
```

- *Type:* object

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.workerCountInput"></a>

```csharp
public double WorkerCountInput { get; }
```

- *Type:* double

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; }
```

- *Type:* object

---

##### `ApiDefinitionUrl`<sup>Required</sup> <a name="ApiDefinitionUrl" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```csharp
public string ApiDefinitionUrl { get; }
```

- *Type:* string

---

##### `ApiManagementApiId`<sup>Required</sup> <a name="ApiManagementApiId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```csharp
public string ApiManagementApiId { get; }
```

- *Type:* string

---

##### `AppCommandLine`<sup>Required</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```csharp
public string AppCommandLine { get; }
```

- *Type:* string

---

##### `ApplicationInsightsConnectionString`<sup>Required</sup> <a name="ApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```csharp
public string ApplicationInsightsConnectionString { get; }
```

- *Type:* string

---

##### `ApplicationInsightsKey`<sup>Required</sup> <a name="ApplicationInsightsKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```csharp
public string ApplicationInsightsKey { get; }
```

- *Type:* string

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; }
```

- *Type:* double

---

##### `ContainerRegistryManagedIdentityClientId`<sup>Required</sup> <a name="ContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId"></a>

```csharp
public string ContainerRegistryManagedIdentityClientId { get; }
```

- *Type:* string

---

##### `ContainerRegistryUseManagedIdentity`<sup>Required</sup> <a name="ContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity"></a>

```csharp
public object ContainerRegistryUseManagedIdentity { get; }
```

- *Type:* object

---

##### `DefaultDocuments`<sup>Required</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```csharp
public string[] DefaultDocuments { get; }
```

- *Type:* string[]

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; }
```

- *Type:* double

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```csharp
public string FtpsState { get; }
```

- *Type:* string

---

##### `HealthCheckEvictionTimeInMin`<sup>Required</sup> <a name="HealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```csharp
public double HealthCheckEvictionTimeInMin { get; }
```

- *Type:* double

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `LoadBalancingMode`<sup>Required</sup> <a name="LoadBalancingMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```csharp
public string LoadBalancingMode { get; }
```

- *Type:* string

---

##### `ManagedPipelineMode`<sup>Required</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```csharp
public string ManagedPipelineMode { get; }
```

- *Type:* string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; }
```

- *Type:* double

---

##### `RemoteDebuggingEnabled`<sup>Required</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```csharp
public object RemoteDebuggingEnabled { get; }
```

- *Type:* object

---

##### `RemoteDebuggingVersion`<sup>Required</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```csharp
public string RemoteDebuggingVersion { get; }
```

- *Type:* string

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; }
```

- *Type:* object

---

##### `ScmMinimumTlsVersion`<sup>Required</sup> <a name="ScmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```csharp
public string ScmMinimumTlsVersion { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; }
```

- *Type:* object

---

##### `Use32BitWorker`<sup>Required</sup> <a name="Use32BitWorker" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```csharp
public object Use32BitWorker { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; }
```

- *Type:* object

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; }
```

- *Type:* object

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppSiteConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfig">LinuxFunctionAppSiteConfig</a>

---


### LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```csharp
private LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigScmIpRestrictionList <a name="LinuxFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```csharp
private LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList">LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```csharp
public LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList">LinuxFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppSiteCredentialList <a name="LinuxFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.get"></a>

```csharp
private LinuxFunctionAppSiteCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LinuxFunctionAppSiteCredentialOutputReference <a name="LinuxFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppSiteCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredential">LinuxFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppSiteCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppSiteCredential">LinuxFunctionAppSiteCredential</a>

---


### LinuxFunctionAppStickySettingsOutputReference <a name="LinuxFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppStickySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resetAppSettingNames">ResetAppSettingNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resetConnectionStringNames">ResetConnectionStringNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSettingNames` <a name="ResetAppSettingNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resetAppSettingNames"></a>

```csharp
private void ResetAppSettingNames()
```

##### `ResetConnectionStringNames` <a name="ResetConnectionStringNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.resetConnectionStringNames"></a>

```csharp
private void ResetConnectionStringNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.appSettingNamesInput">AppSettingNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput">ConnectionStringNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.appSettingNames">AppSettingNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.connectionStringNames">ConnectionStringNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSettingNamesInput`<sup>Optional</sup> <a name="AppSettingNamesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.appSettingNamesInput"></a>

```csharp
public string[] AppSettingNamesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionStringNamesInput`<sup>Optional</sup> <a name="ConnectionStringNamesInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput"></a>

```csharp
public string[] ConnectionStringNamesInput { get; }
```

- *Type:* string[]

---

##### `AppSettingNames`<sup>Required</sup> <a name="AppSettingNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```csharp
public string[] AppSettingNames { get; }
```

- *Type:* string[]

---

##### `ConnectionStringNames`<sup>Required</sup> <a name="ConnectionStringNames" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```csharp
public string[] ConnectionStringNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```csharp
public LinuxFunctionAppStickySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStickySettings">LinuxFunctionAppStickySettings</a>

---


### LinuxFunctionAppStorageAccountList <a name="LinuxFunctionAppStorageAccountList" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.get"></a>

```csharp
private LinuxFunctionAppStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppStorageAccountOutputReference <a name="LinuxFunctionAppStorageAccountOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LinuxFunctionAppTimeoutsOutputReference <a name="LinuxFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LinuxFunctionAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxFunctionApp.LinuxFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



