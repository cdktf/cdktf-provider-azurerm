# `windowsFunctionApp` Submodule <a name="`windowsFunctionApp` Submodule" id="@cdktf/provider-azurerm.windowsFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsFunctionApp <a name="WindowsFunctionApp" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app azurerm_windows_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionApp(scope: Construct, id: string, config: WindowsFunctionAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig">WindowsFunctionAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig">WindowsFunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings">putStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBuiltinLoggingEnabled">resetBuiltinLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateExclusionPaths">resetClientCertificateExclusionPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateMode">resetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetContentShareForceDisabled">resetContentShareForceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetDailyMemoryTimeQuota">resetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetFunctionsExtensionVersion">resetFunctionsExtensionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStickySettings">resetStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageKeyVaultSecretId">resetStorageKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageUsesManagedIdentity">resetStorageUsesManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings"></a>

```typescript
public putAuthSettings(value: WindowsFunctionAppAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup"></a>

```typescript
public putBackup(value: WindowsFunctionAppBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | WindowsFunctionAppConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity"></a>

```typescript
public putIdentity(value: WindowsFunctionAppIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig"></a>

```typescript
public putSiteConfig(value: WindowsFunctionAppSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

---

##### `putStickySettings` <a name="putStickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings"></a>

```typescript
public putStickySettings(value: WindowsFunctionAppStickySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | WindowsFunctionAppStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts"></a>

```typescript
public putTimeouts(value: WindowsFunctionAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetBuiltinLoggingEnabled` <a name="resetBuiltinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBuiltinLoggingEnabled"></a>

```typescript
public resetBuiltinLoggingEnabled(): void
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateEnabled"></a>

```typescript
public resetClientCertificateEnabled(): void
```

##### `resetClientCertificateExclusionPaths` <a name="resetClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateExclusionPaths"></a>

```typescript
public resetClientCertificateExclusionPaths(): void
```

##### `resetClientCertificateMode` <a name="resetClientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateMode"></a>

```typescript
public resetClientCertificateMode(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetContentShareForceDisabled` <a name="resetContentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetContentShareForceDisabled"></a>

```typescript
public resetContentShareForceDisabled(): void
```

##### `resetDailyMemoryTimeQuota` <a name="resetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetDailyMemoryTimeQuota"></a>

```typescript
public resetDailyMemoryTimeQuota(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFunctionsExtensionVersion` <a name="resetFunctionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetFunctionsExtensionVersion"></a>

```typescript
public resetFunctionsExtensionVersion(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetStickySettings` <a name="resetStickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStickySettings"></a>

```typescript
public resetStickySettings(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```

##### `resetStorageKeyVaultSecretId` <a name="resetStorageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageKeyVaultSecretId"></a>

```typescript
public resetStorageKeyVaultSecretId(): void
```

##### `resetStorageUsesManagedIdentity` <a name="resetStorageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageUsesManagedIdentity"></a>

```typescript
public resetStorageUsesManagedIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

windowsFunctionApp.WindowsFunctionApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

windowsFunctionApp.WindowsFunctionApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

windowsFunctionApp.WindowsFunctionApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference">WindowsFunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference">WindowsFunctionAppBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList">WindowsFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference">WindowsFunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference">WindowsFunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList">WindowsFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference">WindowsFunctionAppStickySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList">WindowsFunctionAppStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference">WindowsFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabledInput">builtinLoggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPathsInput">clientCertificateExclusionPathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateModeInput">clientCertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabledInput">contentShareForceDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuotaInput">dailyMemoryTimeQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersionInput">functionsExtensionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanIdInput">servicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettingsInput">stickySettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretIdInput">storageKeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentityInput">storageUsesManagedIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabled">builtinLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabled">contentShareForceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersion">functionsExtensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretId">storageKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentity">storageUsesManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettings"></a>

```typescript
public readonly authSettings: WindowsFunctionAppAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference">WindowsFunctionAppAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backup"></a>

```typescript
public readonly backup: WindowsFunctionAppBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference">WindowsFunctionAppBackupOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionString"></a>

```typescript
public readonly connectionString: WindowsFunctionAppConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList">WindowsFunctionAppConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identity"></a>

```typescript
public readonly identity: WindowsFunctionAppIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference">WindowsFunctionAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfig"></a>

```typescript
public readonly siteConfig: WindowsFunctionAppSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference">WindowsFunctionAppSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteCredential"></a>

```typescript
public readonly siteCredential: WindowsFunctionAppSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList">WindowsFunctionAppSiteCredentialList</a>

---

##### `stickySettings`<sup>Required</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettings"></a>

```typescript
public readonly stickySettings: WindowsFunctionAppStickySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference">WindowsFunctionAppStickySettingsOutputReference</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccount"></a>

```typescript
public readonly storageAccount: WindowsFunctionAppStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList">WindowsFunctionAppStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsFunctionAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference">WindowsFunctionAppTimeoutsOutputReference</a>

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: WindowsFunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backupInput"></a>

```typescript
public readonly backupInput: WindowsFunctionAppBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

---

##### `builtinLoggingEnabledInput`<sup>Optional</sup> <a name="builtinLoggingEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabledInput"></a>

```typescript
public readonly builtinLoggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabledInput"></a>

```typescript
public readonly clientCertificateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPathsInput`<sup>Optional</sup> <a name="clientCertificateExclusionPathsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPathsInput"></a>

```typescript
public readonly clientCertificateExclusionPathsInput: string;
```

- *Type:* string

---

##### `clientCertificateModeInput`<sup>Optional</sup> <a name="clientCertificateModeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateModeInput"></a>

```typescript
public readonly clientCertificateModeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | WindowsFunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]

---

##### `contentShareForceDisabledInput`<sup>Optional</sup> <a name="contentShareForceDisabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabledInput"></a>

```typescript
public readonly contentShareForceDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="dailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```typescript
public readonly dailyMemoryTimeQuotaInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionsExtensionVersionInput`<sup>Optional</sup> <a name="functionsExtensionVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersionInput"></a>

```typescript
public readonly functionsExtensionVersionInput: string;
```

- *Type:* string

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identityInput"></a>

```typescript
public readonly identityInput: WindowsFunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `servicePlanIdInput`<sup>Optional</sup> <a name="servicePlanIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanIdInput"></a>

```typescript
public readonly servicePlanIdInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: WindowsFunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

---

##### `stickySettingsInput`<sup>Optional</sup> <a name="stickySettingsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettingsInput"></a>

```typescript
public readonly stickySettingsInput: WindowsFunctionAppStickySettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | WindowsFunctionAppStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `storageKeyVaultSecretIdInput`<sup>Optional</sup> <a name="storageKeyVaultSecretIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretIdInput"></a>

```typescript
public readonly storageKeyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `storageUsesManagedIdentityInput`<sup>Optional</sup> <a name="storageUsesManagedIdentityInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentityInput"></a>

```typescript
public readonly storageUsesManagedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: WindowsFunctionAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `builtinLoggingEnabled`<sup>Required</sup> <a name="builtinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabled"></a>

```typescript
public readonly builtinLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPaths`<sup>Required</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

---

##### `contentShareForceDisabled`<sup>Required</sup> <a name="contentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabled"></a>

```typescript
public readonly contentShareForceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionsExtensionVersion`<sup>Required</sup> <a name="functionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersion"></a>

```typescript
public readonly functionsExtensionVersion: string;
```

- *Type:* string

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageKeyVaultSecretId`<sup>Required</sup> <a name="storageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretId"></a>

```typescript
public readonly storageKeyVaultSecretId: string;
```

- *Type:* string

---

##### `storageUsesManagedIdentity`<sup>Required</sup> <a name="storageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentity"></a>

```typescript
public readonly storageUsesManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsFunctionAppAuthSettings <a name="WindowsFunctionAppAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettings: windowsFunctionApp.WindowsFunctionAppAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: WindowsFunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#active_directory WindowsFunctionApp#active_directory}

---

##### `additionalLoginParameters`<sup>Optional</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#additional_login_parameters WindowsFunctionApp#additional_login_parameters}

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_external_redirect_urls WindowsFunctionApp#allowed_external_redirect_urls}

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_provider WindowsFunctionApp#default_provider}

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: WindowsFunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#facebook WindowsFunctionApp#facebook}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.github"></a>

```typescript
public readonly github: WindowsFunctionAppAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#github WindowsFunctionApp#github}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.google"></a>

```typescript
public readonly google: WindowsFunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#google WindowsFunctionApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#issuer WindowsFunctionApp#issuer}

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: WindowsFunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#microsoft WindowsFunctionApp#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_version WindowsFunctionApp#runtime_version}

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_refresh_extension_hours WindowsFunctionApp#token_refresh_extension_hours}

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_store_enabled WindowsFunctionApp#token_store_enabled}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: WindowsFunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#twitter WindowsFunctionApp#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#unauthenticated_client_action WindowsFunctionApp#unauthenticated_client_action}

---

### WindowsFunctionAppAuthSettingsActiveDirectory <a name="WindowsFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsActiveDirectory: windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

### WindowsFunctionAppAuthSettingsFacebook <a name="WindowsFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsFacebook: windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_id WindowsFunctionApp#app_id}

---

##### `appSecret`<sup>Optional</sup> <a name="appSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret WindowsFunctionApp#app_secret}

---

##### `appSecretSettingName`<sup>Optional</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret_setting_name WindowsFunctionApp#app_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsGithub <a name="WindowsFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsGithub: windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientId">clientId</a></code> | <code>string</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsGoogle <a name="WindowsFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsGoogle: windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsMicrosoft <a name="WindowsFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsMicrosoft: windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsTwitter <a name="WindowsFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppAuthSettingsTwitter: windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_key WindowsFunctionApp#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret WindowsFunctionApp#consumer_secret}

---

##### `consumerSecretSettingName`<sup>Optional</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret_setting_name WindowsFunctionApp#consumer_secret_setting_name}

---

### WindowsFunctionAppBackup <a name="WindowsFunctionAppBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppBackup: windowsFunctionApp.WindowsFunctionAppBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.name">name</a></code> | <code>string</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should this backup job be enabled? |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.schedule"></a>

```typescript
public readonly schedule: WindowsFunctionAppBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#schedule WindowsFunctionApp#schedule}

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_url WindowsFunctionApp#storage_account_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

### WindowsFunctionAppBackupSchedule <a name="WindowsFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppBackupSchedule: windowsFunctionApp.WindowsFunctionAppBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.startTime">startTime</a></code> | <code>string</code> | When the schedule should start working in RFC-3339 format. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_interval WindowsFunctionApp#frequency_interval}

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_unit WindowsFunctionApp#frequency_unit}

---

##### `keepAtLeastOneBackup`<sup>Optional</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#keep_at_least_one_backup WindowsFunctionApp#keep_at_least_one_backup}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#start_time WindowsFunctionApp#start_time}

---

### WindowsFunctionAppConfig <a name="WindowsFunctionAppConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppConfig: windowsFunctionApp.WindowsFunctionAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | The ID of the App Service Plan within which to create this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.builtinLoggingEnabled">builtinLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the function app use Client Certificates. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | The mode of the Function App's client certificates requirement for incoming requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.contentShareForceDisabled">contentShareForceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force disable the content share settings. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | The amount of memory in gigabyte-seconds that your application is allowed to consume per day. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the Windows Function App enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.functionsExtensionVersion">functionsExtensionVersion</a></code> | <code>string</code> | The runtime version associated with the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Can the Function App only be accessed via HTTPS? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Key Vault access. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | The access key which will be used to access the storage account for the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | The backend storage account name which will be used by this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageKeyVaultSecretId">storageKeyVaultSecretId</a></code> | <code>string</code> | The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageUsesManagedIdentity">storageUsesManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Function App use its Managed Identity to access storage? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}.

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

The ID of the App Service Plan within which to create this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_plan_id WindowsFunctionApp#service_plan_id}

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: WindowsFunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#site_config WindowsFunctionApp#site_config}

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_settings WindowsFunctionApp#app_settings}

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.authSettings"></a>

```typescript
public readonly authSettings: WindowsFunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#auth_settings WindowsFunctionApp#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.backup"></a>

```typescript
public readonly backup: WindowsFunctionAppBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#backup WindowsFunctionApp#backup}

---

##### `builtinLoggingEnabled`<sup>Optional</sup> <a name="builtinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.builtinLoggingEnabled"></a>

```typescript
public readonly builtinLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#builtin_logging_enabled WindowsFunctionApp#builtin_logging_enabled}

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the function app use Client Certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_enabled WindowsFunctionApp#client_certificate_enabled}

---

##### `clientCertificateExclusionPaths`<sup>Optional</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_exclusion_paths WindowsFunctionApp#client_certificate_exclusion_paths}

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

The mode of the Function App's client certificates requirement for incoming requests.

Possible values are `Required`, `Optional`, and `OptionalInteractiveUser` 

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_mode WindowsFunctionApp#client_certificate_mode}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | WindowsFunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string WindowsFunctionApp#connection_string}

---

##### `contentShareForceDisabled`<sup>Optional</sup> <a name="contentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.contentShareForceDisabled"></a>

```typescript
public readonly contentShareForceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force disable the content share settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#content_share_force_disabled WindowsFunctionApp#content_share_force_disabled}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

The amount of memory in gigabyte-seconds that your application is allowed to consume per day.

Setting this value only affects function apps in Consumption Plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#daily_memory_time_quota WindowsFunctionApp#daily_memory_time_quota}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the Windows Function App enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `functionsExtensionVersion`<sup>Optional</sup> <a name="functionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.functionsExtensionVersion"></a>

```typescript
public readonly functionsExtensionVersion: string;
```

- *Type:* string

The runtime version associated with the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#functions_extension_version WindowsFunctionApp#functions_extension_version}

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Can the Function App only be accessed via HTTPS?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#https_only WindowsFunctionApp#https_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.identity"></a>

```typescript
public readonly identity: WindowsFunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity WindowsFunctionApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

The User Assigned Identity to use for Key Vault access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#key_vault_reference_identity_id WindowsFunctionApp#key_vault_reference_identity_id}

---

##### `stickySettings`<sup>Optional</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.stickySettings"></a>

```typescript
public readonly stickySettings: WindowsFunctionAppStickySettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#sticky_settings WindowsFunctionApp#sticky_settings}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | WindowsFunctionAppStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account WindowsFunctionApp#storage_account}

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

The access key which will be used to access the storage account for the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_access_key WindowsFunctionApp#storage_account_access_key}

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

The backend storage account name which will be used by this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_name WindowsFunctionApp#storage_account_name}

---

##### `storageKeyVaultSecretId`<sup>Optional</sup> <a name="storageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageKeyVaultSecretId"></a>

```typescript
public readonly storageKeyVaultSecretId: string;
```

- *Type:* string

The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_key_vault_secret_id WindowsFunctionApp#storage_key_vault_secret_id}

---

##### `storageUsesManagedIdentity`<sup>Optional</sup> <a name="storageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageUsesManagedIdentity"></a>

```typescript
public readonly storageUsesManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Function App use its Managed Identity to access storage?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_uses_managed_identity WindowsFunctionApp#storage_uses_managed_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsFunctionAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#timeouts WindowsFunctionApp#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppConnectionString <a name="WindowsFunctionAppConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppConnectionString: windowsFunctionApp.WindowsFunctionAppConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.name">name</a></code> | <code>string</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.type">type</a></code> | <code>string</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.value">value</a></code> | <code>string</code> | The connection string value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#value WindowsFunctionApp#value}

---

### WindowsFunctionAppIdentity <a name="WindowsFunctionAppIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppIdentity: windowsFunctionApp.WindowsFunctionAppIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}.

---

### WindowsFunctionAppSiteConfig <a name="WindowsFunctionAppSiteConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfig: windowsFunctionApp.WindowsFunctionAppSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this Windows Web App is Always On enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | The URL of the API definition that describes this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | The ID of the API Management API for this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | The program and any arguments used to launch this app via the command line. (Example `node myapp.js`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsConnectionString">applicationInsightsConnectionString</a></code> | <code>string</code> | The Connection String for linking the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsKey">applicationInsightsKey</a></code> | <code>string</code> | The Instrumentation Key for connecting the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | The number of workers this function app can scale out to. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appServiceLogs">appServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | app_service_logs block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | Specifies a list of Default Documents for the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | State of FTP / FTPS service for this function app. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | The path to be checked for this function app health. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the http2 protocol should be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | The configures the minimum version of TLS required for SSL requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Remote Debugging be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Functions Runtime Scale Monitoring be enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Function App `ip_restriction` configuration be used for the SCM also. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Web App use a 32-bit worker. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Web Sockets be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.workerCount">workerCount</a></code> | <code>number</code> | The number of Workers for this Windows Function App. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this Windows Web App is Always On enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#always_on WindowsFunctionApp#always_on}

---

##### `apiDefinitionUrl`<sup>Optional</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

The URL of the API definition that describes this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_definition_url WindowsFunctionApp#api_definition_url}

---

##### `apiManagementApiId`<sup>Optional</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

The ID of the API Management API for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_management_api_id WindowsFunctionApp#api_management_api_id}

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_command_line WindowsFunctionApp#app_command_line}

---

##### `applicationInsightsConnectionString`<sup>Optional</sup> <a name="applicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsConnectionString"></a>

```typescript
public readonly applicationInsightsConnectionString: string;
```

- *Type:* string

The Connection String for linking the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_connection_string WindowsFunctionApp#application_insights_connection_string}

---

##### `applicationInsightsKey`<sup>Optional</sup> <a name="applicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsKey"></a>

```typescript
public readonly applicationInsightsKey: string;
```

- *Type:* string

The Instrumentation Key for connecting the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_key WindowsFunctionApp#application_insights_key}

---

##### `applicationStack`<sup>Optional</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationStack"></a>

```typescript
public readonly applicationStack: WindowsFunctionAppSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_stack WindowsFunctionApp#application_stack}

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

The number of workers this function app can scale out to.

Only applicable to apps on the Consumption and Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_scale_limit WindowsFunctionApp#app_scale_limit}

---

##### `appServiceLogs`<sup>Optional</sup> <a name="appServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appServiceLogs"></a>

```typescript
public readonly appServiceLogs: WindowsFunctionAppSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

app_service_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_service_logs WindowsFunctionApp#app_service_logs}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.cors"></a>

```typescript
public readonly cors: WindowsFunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#cors WindowsFunctionApp#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

Specifies a list of Default Documents for the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_documents WindowsFunctionApp#default_documents}

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#elastic_instance_minimum WindowsFunctionApp#elastic_instance_minimum}

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

State of FTP / FTPS service for this function app.

Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ftps_state WindowsFunctionApp#ftps_state}

---

##### `healthCheckEvictionTimeInMin`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_eviction_time_in_min WindowsFunctionApp#health_check_eviction_time_in_min}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

The path to be checked for this function app health.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_path WindowsFunctionApp#health_check_path}

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the http2 protocol should be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#http2_enabled WindowsFunctionApp#http2_enabled}

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | WindowsFunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}.

---

##### `loadBalancingMode`<sup>Optional</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#load_balancing_mode WindowsFunctionApp#load_balancing_mode}

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#managed_pipeline_mode WindowsFunctionApp#managed_pipeline_mode}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

The configures the minimum version of TLS required for SSL requests.

Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#minimum_tls_version WindowsFunctionApp#minimum_tls_version}

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#pre_warmed_instance_count WindowsFunctionApp#pre_warmed_instance_count}

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Remote Debugging be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_enabled WindowsFunctionApp#remote_debugging_enabled}

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_version WindowsFunctionApp#remote_debugging_version}

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Functions Runtime Scale Monitoring be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_scale_monitoring_enabled WindowsFunctionApp#runtime_scale_monitoring_enabled}

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | WindowsFunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}.

---

##### `scmMinimumTlsVersion`<sup>Optional</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_minimum_tls_version WindowsFunctionApp#scm_minimum_tls_version}

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Function App `ip_restriction` configuration be used for the SCM also.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_use_main_ip_restriction WindowsFunctionApp#scm_use_main_ip_restriction}

---

##### `use32BitWorker`<sup>Optional</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Web App use a 32-bit worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_32_bit_worker WindowsFunctionApp#use_32_bit_worker}

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#vnet_route_all_enabled WindowsFunctionApp#vnet_route_all_enabled}

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Web Sockets be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#websockets_enabled WindowsFunctionApp#websockets_enabled}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

The number of Workers for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#worker_count WindowsFunctionApp#worker_count}

---

### WindowsFunctionAppSiteConfigApplicationStack <a name="WindowsFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigApplicationStack: windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.javaVersion">javaVersion</a></code> | <code>string</code> | The version of Java to use. Possible values are `1.8`, `11` and `17`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | The version of Node to use. Possible values include `12`, and `14`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion">powershellCoreVersion</a></code> | <code>string</code> | The PowerShell Core version to use. Possible values are `7`, and `7.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useCustomRuntime">useCustomRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Does the Function App use a custom Application Stack? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime">useDotnetIsolatedRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the DotNet process use an isolated runtime. Defaults to `false`. |

---

##### `dotnetVersion`<sup>Optional</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#dotnet_version WindowsFunctionApp#dotnet_version}

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The version of Java to use. Possible values are `1.8`, `11` and `17`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#java_version WindowsFunctionApp#java_version}

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

The version of Node to use. Possible values include `12`, and `14`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#node_version WindowsFunctionApp#node_version}

---

##### `powershellCoreVersion`<sup>Optional</sup> <a name="powershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion"></a>

```typescript
public readonly powershellCoreVersion: string;
```

- *Type:* string

The PowerShell Core version to use. Possible values are `7`, and `7.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#powershell_core_version WindowsFunctionApp#powershell_core_version}

---

##### `useCustomRuntime`<sup>Optional</sup> <a name="useCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useCustomRuntime"></a>

```typescript
public readonly useCustomRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Does the Function App use a custom Application Stack?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_custom_runtime WindowsFunctionApp#use_custom_runtime}

---

##### `useDotnetIsolatedRuntime`<sup>Optional</sup> <a name="useDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime"></a>

```typescript
public readonly useDotnetIsolatedRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the DotNet process use an isolated runtime. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_dotnet_isolated_runtime WindowsFunctionApp#use_dotnet_isolated_runtime}

---

### WindowsFunctionAppSiteConfigAppServiceLogs <a name="WindowsFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigAppServiceLogs: windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb">diskQuotaMb</a></code> | <code>number</code> | The amount of disk space to use for logs. Valid values are between `25` and `100`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete). |

---

##### `diskQuotaMb`<sup>Optional</sup> <a name="diskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb"></a>

```typescript
public readonly diskQuotaMb: number;
```

- *Type:* number

The amount of disk space to use for logs. Valid values are between `25` and `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#disk_quota_mb WindowsFunctionApp#disk_quota_mb}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

### WindowsFunctionAppSiteConfigCors <a name="WindowsFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigCors: windowsFunctionApp.WindowsFunctionAppSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_origins WindowsFunctionApp#allowed_origins}

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#support_credentials WindowsFunctionApp#support_credentials}

---

### WindowsFunctionAppSiteConfigIpRestriction <a name="WindowsFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigIpRestriction: windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | WindowsFunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppSiteConfigIpRestrictionHeaders <a name="WindowsFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigIpRestrictionHeaders: windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}.

---

### WindowsFunctionAppSiteConfigScmIpRestriction <a name="WindowsFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigScmIpRestriction: windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppSiteConfigScmIpRestrictionHeaders <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteConfigScmIpRestrictionHeaders: windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}.

---

### WindowsFunctionAppSiteCredential <a name="WindowsFunctionAppSiteCredential" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppSiteCredential: windowsFunctionApp.WindowsFunctionAppSiteCredential = { ... }
```


### WindowsFunctionAppStickySettings <a name="WindowsFunctionAppStickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppStickySettings: windowsFunctionApp.WindowsFunctionAppStickySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.appSettingNames">appSettingNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.connectionStringNames">connectionStringNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}. |

---

##### `appSettingNames`<sup>Optional</sup> <a name="appSettingNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.appSettingNames"></a>

```typescript
public readonly appSettingNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}.

---

##### `connectionStringNames`<sup>Optional</sup> <a name="connectionStringNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.connectionStringNames"></a>

```typescript
public readonly connectionStringNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}.

---

### WindowsFunctionAppStorageAccount <a name="WindowsFunctionAppStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppStorageAccount: windowsFunctionApp.WindowsFunctionAppStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#access_key WindowsFunctionApp#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#account_name WindowsFunctionApp#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#share_name WindowsFunctionApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#mount_path WindowsFunctionApp#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#access_key WindowsFunctionApp#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#account_name WindowsFunctionApp#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#share_name WindowsFunctionApp#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#mount_path WindowsFunctionApp#mount_path}.

---

### WindowsFunctionAppTimeouts <a name="WindowsFunctionAppTimeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

const windowsFunctionAppTimeouts: windowsFunctionApp.WindowsFunctionAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#create WindowsFunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#delete WindowsFunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#read WindowsFunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#update WindowsFunctionApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#create WindowsFunctionApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#delete WindowsFunctionApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#read WindowsFunctionApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#update WindowsFunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

---


### WindowsFunctionAppAuthSettingsFacebookOutputReference <a name="WindowsFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret">resetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName">resetAppSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSecret` <a name="resetAppSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```typescript
public resetAppSecret(): void
```

##### `resetAppSecretSettingName` <a name="resetAppSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```typescript
public resetAppSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">appSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `appSecretSettingNameInput`<sup>Optional</sup> <a name="appSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```typescript
public readonly appSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

---


### WindowsFunctionAppAuthSettingsGithubOutputReference <a name="WindowsFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

---


### WindowsFunctionAppAuthSettingsGoogleOutputReference <a name="WindowsFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

---


### WindowsFunctionAppAuthSettingsMicrosoftOutputReference <a name="WindowsFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

---


### WindowsFunctionAppAuthSettingsOutputReference <a name="WindowsFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters">resetAdditionalLoginParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: WindowsFunctionAppAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: WindowsFunctionAppAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub"></a>

```typescript
public putGithub(value: WindowsFunctionAppAuthSettingsGithub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: WindowsFunctionAppAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: WindowsFunctionAppAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: WindowsFunctionAppAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParameters` <a name="resetAdditionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```typescript
public resetAdditionalLoginParameters(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGithub"></a>

```typescript
public resetGithub(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference">WindowsFunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference">WindowsFunctionAppAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference">WindowsFunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference">WindowsFunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference">WindowsFunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput">additionalLoginParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.githubInput">githubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: WindowsFunctionAppAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference">WindowsFunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.github"></a>

```typescript
public readonly github: WindowsFunctionAppAuthSettingsGithubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference">WindowsFunctionAppAuthSettingsGithubOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: WindowsFunctionAppAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference">WindowsFunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: WindowsFunctionAppAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference">WindowsFunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: WindowsFunctionAppAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference">WindowsFunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: WindowsFunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParametersInput`<sup>Optional</sup> <a name="additionalLoginParametersInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```typescript
public readonly additionalLoginParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: WindowsFunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.githubInput"></a>

```typescript
public readonly githubInput: WindowsFunctionAppAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: WindowsFunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: WindowsFunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: WindowsFunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParameters`<sup>Required</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

---


### WindowsFunctionAppAuthSettingsTwitterOutputReference <a name="WindowsFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">resetConsumerSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```typescript
public resetConsumerSecret(): void
```

##### `resetConsumerSecretSettingName` <a name="resetConsumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```typescript
public resetConsumerSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">consumerSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerSecretSettingNameInput`<sup>Optional</sup> <a name="consumerSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```typescript
public readonly consumerSecretSettingNameInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

---


### WindowsFunctionAppBackupOutputReference <a name="WindowsFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: WindowsFunctionAppBackupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference">WindowsFunctionAppBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.schedule"></a>

```typescript
public readonly schedule: WindowsFunctionAppBackupScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference">WindowsFunctionAppBackupScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: WindowsFunctionAppBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrlInput"></a>

```typescript
public readonly storageAccountUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

---


### WindowsFunctionAppBackupScheduleOutputReference <a name="WindowsFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup">resetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepAtLeastOneBackup` <a name="resetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```typescript
public resetKeepAtLeastOneBackup(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">lastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput">frequencyUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keepAtLeastOneBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastExecutionTime`<sup>Required</sup> <a name="lastExecutionTime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```typescript
public readonly lastExecutionTime: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `frequencyUnitInput`<sup>Optional</sup> <a name="frequencyUnitInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```typescript
public readonly frequencyUnitInput: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackupInput`<sup>Optional</sup> <a name="keepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```typescript
public readonly keepAtLeastOneBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

---


### WindowsFunctionAppConnectionStringList <a name="WindowsFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>[]

---


### WindowsFunctionAppConnectionStringOutputReference <a name="WindowsFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppConnectionString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a> | cdktf.IResolvable

---


### WindowsFunctionAppIdentityOutputReference <a name="WindowsFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

---


### WindowsFunctionAppSiteConfigApplicationStackOutputReference <a name="WindowsFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion">resetDotnetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion">resetNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion">resetPowershellCoreVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime">resetUseCustomRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime">resetUseDotnetIsolatedRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDotnetVersion` <a name="resetDotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```typescript
public resetDotnetVersion(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetNodeVersion` <a name="resetNodeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```typescript
public resetNodeVersion(): void
```

##### `resetPowershellCoreVersion` <a name="resetPowershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion"></a>

```typescript
public resetPowershellCoreVersion(): void
```

##### `resetUseCustomRuntime` <a name="resetUseCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime"></a>

```typescript
public resetUseCustomRuntime(): void
```

##### `resetUseDotnetIsolatedRuntime` <a name="resetUseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime"></a>

```typescript
public resetUseDotnetIsolatedRuntime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">dotnetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput">nodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput">powershellCoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput">useCustomRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput">useDotnetIsolatedRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">powershellCoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">useCustomRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">useDotnetIsolatedRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dotnetVersionInput`<sup>Optional</sup> <a name="dotnetVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```typescript
public readonly dotnetVersionInput: string;
```

- *Type:* string

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `nodeVersionInput`<sup>Optional</sup> <a name="nodeVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```typescript
public readonly nodeVersionInput: string;
```

- *Type:* string

---

##### `powershellCoreVersionInput`<sup>Optional</sup> <a name="powershellCoreVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput"></a>

```typescript
public readonly powershellCoreVersionInput: string;
```

- *Type:* string

---

##### `useCustomRuntimeInput`<sup>Optional</sup> <a name="useCustomRuntimeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput"></a>

```typescript
public readonly useCustomRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useDotnetIsolatedRuntimeInput`<sup>Optional</sup> <a name="useDotnetIsolatedRuntimeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput"></a>

```typescript
public readonly useDotnetIsolatedRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dotnetVersion`<sup>Required</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

##### `powershellCoreVersion`<sup>Required</sup> <a name="powershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```typescript
public readonly powershellCoreVersion: string;
```

- *Type:* string

---

##### `useCustomRuntime`<sup>Required</sup> <a name="useCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```typescript
public readonly useCustomRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useDotnetIsolatedRuntime`<sup>Required</sup> <a name="useDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```typescript
public readonly useDotnetIsolatedRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

---


### WindowsFunctionAppSiteConfigAppServiceLogsOutputReference <a name="WindowsFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb">resetDiskQuotaMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskQuotaMb` <a name="resetDiskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb"></a>

```typescript
public resetDiskQuotaMb(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput">diskQuotaMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">diskQuotaMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskQuotaMbInput`<sup>Optional</sup> <a name="diskQuotaMbInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput"></a>

```typescript
public readonly diskQuotaMbInput: number;
```

- *Type:* number

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `diskQuotaMb`<sup>Required</sup> <a name="diskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```typescript
public readonly diskQuotaMb: number;
```

- *Type:* number

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

---


### WindowsFunctionAppSiteConfigCorsOutputReference <a name="WindowsFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

---


### WindowsFunctionAppSiteConfigIpRestrictionHeadersList <a name="WindowsFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]

---


### WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a> | cdktf.IResolvable

---


### WindowsFunctionAppSiteConfigIpRestrictionList <a name="WindowsFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]

---


### WindowsFunctionAppSiteConfigIpRestrictionOutputReference <a name="WindowsFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | WindowsFunctionAppSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: WindowsFunctionAppSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | WindowsFunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a> | cdktf.IResolvable

---


### WindowsFunctionAppSiteConfigOutputReference <a name="WindowsFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack">putApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs">putAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl">resetApiDefinitionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiManagementApiId">resetApiManagementApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString">resetApplicationInsightsConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey">resetApplicationInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationStack">resetApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppServiceLogs">resetAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">resetHealthCheckEvictionTimeInMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetLoadBalancingMode">resetLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion">resetScmMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetUse32BitWorker">resetUse32BitWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationStack` <a name="putApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack"></a>

```typescript
public putApplicationStack(value: WindowsFunctionAppSiteConfigApplicationStack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

---

##### `putAppServiceLogs` <a name="putAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs"></a>

```typescript
public putAppServiceLogs(value: WindowsFunctionAppSiteConfigAppServiceLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: WindowsFunctionAppSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | WindowsFunctionAppSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | WindowsFunctionAppSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetApiDefinitionUrl` <a name="resetApiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```typescript
public resetApiDefinitionUrl(): void
```

##### `resetApiManagementApiId` <a name="resetApiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiManagementApiId"></a>

```typescript
public resetApiManagementApiId(): void
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppCommandLine"></a>

```typescript
public resetAppCommandLine(): void
```

##### `resetApplicationInsightsConnectionString` <a name="resetApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString"></a>

```typescript
public resetApplicationInsightsConnectionString(): void
```

##### `resetApplicationInsightsKey` <a name="resetApplicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey"></a>

```typescript
public resetApplicationInsightsKey(): void
```

##### `resetApplicationStack` <a name="resetApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationStack"></a>

```typescript
public resetApplicationStack(): void
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```typescript
public resetAppScaleLimit(): void
```

##### `resetAppServiceLogs` <a name="resetAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppServiceLogs"></a>

```typescript
public resetAppServiceLogs(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetDefaultDocuments"></a>

```typescript
public resetDefaultDocuments(): void
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```typescript
public resetElasticInstanceMinimum(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckEvictionTimeInMin` <a name="resetHealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```typescript
public resetHealthCheckEvictionTimeInMin(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetLoadBalancingMode` <a name="resetLoadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetLoadBalancingMode"></a>

```typescript
public resetLoadBalancingMode(): void
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetManagedPipelineMode"></a>

```typescript
public resetManagedPipelineMode(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```typescript
public resetPreWarmedInstanceCount(): void
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```typescript
public resetRemoteDebuggingEnabled(): void
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```typescript
public resetRemoteDebuggingVersion(): void
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```typescript
public resetRuntimeScaleMonitoringEnabled(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmMinimumTlsVersion` <a name="resetScmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```typescript
public resetScmMinimumTlsVersion(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorker` <a name="resetUse32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetUse32BitWorker"></a>

```typescript
public resetUse32BitWorker(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWorkerCount"></a>

```typescript
public resetWorkerCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference">WindowsFunctionAppSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs">appServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSiteConfigAppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference">WindowsFunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailedErrorLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList">WindowsFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList">WindowsFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput">apiDefinitionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput">apiManagementApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput">applicationInsightsConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput">applicationInsightsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStackInput">applicationStackInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogsInput">appServiceLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">healthCheckEvictionTimeInMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput">loadBalancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput">scmMinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput">use32BitWorkerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">applicationInsightsConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">applicationInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationStack`<sup>Required</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```typescript
public readonly applicationStack: WindowsFunctionAppSiteConfigApplicationStackOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference">WindowsFunctionAppSiteConfigApplicationStackOutputReference</a>

---

##### `appServiceLogs`<sup>Required</sup> <a name="appServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```typescript
public readonly appServiceLogs: WindowsFunctionAppSiteConfigAppServiceLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSiteConfigAppServiceLogsOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: WindowsFunctionAppSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference">WindowsFunctionAppSiteConfigCorsOutputReference</a>

---

##### `detailedErrorLoggingEnabled`<sup>Required</sup> <a name="detailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```typescript
public readonly detailedErrorLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: WindowsFunctionAppSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList">WindowsFunctionAppSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: WindowsFunctionAppSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList">WindowsFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrlInput`<sup>Optional</sup> <a name="apiDefinitionUrlInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```typescript
public readonly apiDefinitionUrlInput: string;
```

- *Type:* string

---

##### `apiManagementApiIdInput`<sup>Optional</sup> <a name="apiManagementApiIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```typescript
public readonly apiManagementApiIdInput: string;
```

- *Type:* string

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLineInput"></a>

```typescript
public readonly appCommandLineInput: string;
```

- *Type:* string

---

##### `applicationInsightsConnectionStringInput`<sup>Optional</sup> <a name="applicationInsightsConnectionStringInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput"></a>

```typescript
public readonly applicationInsightsConnectionStringInput: string;
```

- *Type:* string

---

##### `applicationInsightsKeyInput`<sup>Optional</sup> <a name="applicationInsightsKeyInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput"></a>

```typescript
public readonly applicationInsightsKeyInput: string;
```

- *Type:* string

---

##### `applicationStackInput`<sup>Optional</sup> <a name="applicationStackInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStackInput"></a>

```typescript
public readonly applicationStackInput: WindowsFunctionAppSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```typescript
public readonly appScaleLimitInput: number;
```

- *Type:* number

---

##### `appServiceLogsInput`<sup>Optional</sup> <a name="appServiceLogsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogsInput"></a>

```typescript
public readonly appServiceLogsInput: WindowsFunctionAppSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: WindowsFunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```typescript
public readonly defaultDocumentsInput: string[];
```

- *Type:* string[]

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```typescript
public readonly elasticInstanceMinimumInput: number;
```

- *Type:* number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMinInput`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMinInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```typescript
public readonly healthCheckEvictionTimeInMinInput: number;
```

- *Type:* number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | WindowsFunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>[]

---

##### `loadBalancingModeInput`<sup>Optional</sup> <a name="loadBalancingModeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```typescript
public readonly loadBalancingModeInput: string;
```

- *Type:* string

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```typescript
public readonly managedPipelineModeInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```typescript
public readonly preWarmedInstanceCountInput: number;
```

- *Type:* number

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```typescript
public readonly remoteDebuggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```typescript
public readonly remoteDebuggingVersionInput: string;
```

- *Type:* string

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```typescript
public readonly runtimeScaleMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | WindowsFunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]

---

##### `scmMinimumTlsVersionInput`<sup>Optional</sup> <a name="scmMinimumTlsVersionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```typescript
public readonly scmMinimumTlsVersionInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerInput`<sup>Optional</sup> <a name="use32BitWorkerInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```typescript
public readonly use32BitWorkerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCountInput"></a>

```typescript
public readonly workerCountInput: number;
```

- *Type:* number

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrl`<sup>Required</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

---

##### `apiManagementApiId`<sup>Required</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `applicationInsightsConnectionString`<sup>Required</sup> <a name="applicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```typescript
public readonly applicationInsightsConnectionString: string;
```

- *Type:* string

---

##### `applicationInsightsKey`<sup>Required</sup> <a name="applicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```typescript
public readonly applicationInsightsKey: string;
```

- *Type:* string

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMin`<sup>Required</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingMode`<sup>Required</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmMinimumTlsVersion`<sup>Required</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorker`<sup>Required</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

---


### WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---


### WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a> | cdktf.IResolvable

---


### WindowsFunctionAppSiteConfigScmIpRestrictionList <a name="WindowsFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>[]

---


### WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteConfigScmIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a> | cdktf.IResolvable

---


### WindowsFunctionAppSiteCredentialList <a name="WindowsFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WindowsFunctionAppSiteCredentialOutputReference <a name="WindowsFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential">WindowsFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential">WindowsFunctionAppSiteCredential</a>

---


### WindowsFunctionAppStickySettingsOutputReference <a name="WindowsFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetAppSettingNames">resetAppSettingNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetConnectionStringNames">resetConnectionStringNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSettingNames` <a name="resetAppSettingNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetAppSettingNames"></a>

```typescript
public resetAppSettingNames(): void
```

##### `resetConnectionStringNames` <a name="resetConnectionStringNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetConnectionStringNames"></a>

```typescript
public resetConnectionStringNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNamesInput">appSettingNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput">connectionStringNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNames">appSettingNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames">connectionStringNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSettingNamesInput`<sup>Optional</sup> <a name="appSettingNamesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNamesInput"></a>

```typescript
public readonly appSettingNamesInput: string[];
```

- *Type:* string[]

---

##### `connectionStringNamesInput`<sup>Optional</sup> <a name="connectionStringNamesInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput"></a>

```typescript
public readonly connectionStringNamesInput: string[];
```

- *Type:* string[]

---

##### `appSettingNames`<sup>Required</sup> <a name="appSettingNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```typescript
public readonly appSettingNames: string[];
```

- *Type:* string[]

---

##### `connectionStringNames`<sup>Required</sup> <a name="connectionStringNames" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```typescript
public readonly connectionStringNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppStickySettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

---


### WindowsFunctionAppStorageAccountList <a name="WindowsFunctionAppStorageAccountList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>[]

---


### WindowsFunctionAppStorageAccountOutputReference <a name="WindowsFunctionAppStorageAccountOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppStorageAccount | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a> | cdktf.IResolvable

---


### WindowsFunctionAppTimeoutsOutputReference <a name="WindowsFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionApp } from '@cdktf/provider-azurerm'

new windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a> | cdktf.IResolvable

---



