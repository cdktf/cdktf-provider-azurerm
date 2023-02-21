# `windowsFunctionAppSlot` Submodule <a name="`windowsFunctionAppSlot` Submodule" id="@cdktf/provider-azurerm.windowsFunctionAppSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsFunctionAppSlot <a name="WindowsFunctionAppSlot" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot azurerm_windows_function_app_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlot(scope: Construct, id: string, config: WindowsFunctionAppSlotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig">WindowsFunctionAppSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig">WindowsFunctionAppSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetBuiltinLoggingEnabled">resetBuiltinLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateExclusionPaths">resetClientCertificateExclusionPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateMode">resetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetContentShareForceDisabled">resetContentShareForceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetDailyMemoryTimeQuota">resetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetFunctionsExtensionVersion">resetFunctionsExtensionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetServicePlanId">resetServicePlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageKeyVaultSecretId">resetStorageKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageUsesManagedIdentity">resetStorageUsesManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putAuthSettings"></a>

```typescript
public putAuthSettings(value: WindowsFunctionAppSlotAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putBackup"></a>

```typescript
public putBackup(value: WindowsFunctionAppSlotBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | WindowsFunctionAppSlotConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putIdentity"></a>

```typescript
public putIdentity(value: WindowsFunctionAppSlotIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putSiteConfig"></a>

```typescript
public putSiteConfig(value: WindowsFunctionAppSlotSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | WindowsFunctionAppSlotStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putTimeouts"></a>

```typescript
public putTimeouts(value: WindowsFunctionAppSlotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetBuiltinLoggingEnabled` <a name="resetBuiltinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetBuiltinLoggingEnabled"></a>

```typescript
public resetBuiltinLoggingEnabled(): void
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateEnabled"></a>

```typescript
public resetClientCertificateEnabled(): void
```

##### `resetClientCertificateExclusionPaths` <a name="resetClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateExclusionPaths"></a>

```typescript
public resetClientCertificateExclusionPaths(): void
```

##### `resetClientCertificateMode` <a name="resetClientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetClientCertificateMode"></a>

```typescript
public resetClientCertificateMode(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetContentShareForceDisabled` <a name="resetContentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetContentShareForceDisabled"></a>

```typescript
public resetContentShareForceDisabled(): void
```

##### `resetDailyMemoryTimeQuota` <a name="resetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetDailyMemoryTimeQuota"></a>

```typescript
public resetDailyMemoryTimeQuota(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFunctionsExtensionVersion` <a name="resetFunctionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetFunctionsExtensionVersion"></a>

```typescript
public resetFunctionsExtensionVersion(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetServicePlanId` <a name="resetServicePlanId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetServicePlanId"></a>

```typescript
public resetServicePlanId(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```

##### `resetStorageKeyVaultSecretId` <a name="resetStorageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageKeyVaultSecretId"></a>

```typescript
public resetStorageKeyVaultSecretId(): void
```

##### `resetStorageUsesManagedIdentity` <a name="resetStorageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetStorageUsesManagedIdentity"></a>

```typescript
public resetStorageUsesManagedIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isConstruct"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

windowsFunctionAppSlot.WindowsFunctionAppSlot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformElement"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformResource"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference">WindowsFunctionAppSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference">WindowsFunctionAppSlotBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList">WindowsFunctionAppSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference">WindowsFunctionAppSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference">WindowsFunctionAppSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList">WindowsFunctionAppSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList">WindowsFunctionAppSlotStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference">WindowsFunctionAppSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.builtinLoggingEnabledInput">builtinLoggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateExclusionPathsInput">clientCertificateExclusionPathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateModeInput">clientCertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.contentShareForceDisabledInput">contentShareForceDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dailyMemoryTimeQuotaInput">dailyMemoryTimeQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionAppIdInput">functionAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionsExtensionVersionInput">functionsExtensionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.servicePlanIdInput">servicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageKeyVaultSecretIdInput">storageKeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageUsesManagedIdentityInput">storageUsesManagedIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.builtinLoggingEnabled">builtinLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.contentShareForceDisabled">contentShareForceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionAppId">functionAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionsExtensionVersion">functionsExtensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageKeyVaultSecretId">storageKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageUsesManagedIdentity">storageUsesManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.authSettings"></a>

```typescript
public readonly authSettings: WindowsFunctionAppSlotAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference">WindowsFunctionAppSlotAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.backup"></a>

```typescript
public readonly backup: WindowsFunctionAppSlotBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference">WindowsFunctionAppSlotBackupOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connectionString"></a>

```typescript
public readonly connectionString: WindowsFunctionAppSlotConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList">WindowsFunctionAppSlotConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.identity"></a>

```typescript
public readonly identity: WindowsFunctionAppSlotIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference">WindowsFunctionAppSlotIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteConfig"></a>

```typescript
public readonly siteConfig: WindowsFunctionAppSlotSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference">WindowsFunctionAppSlotSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteCredential"></a>

```typescript
public readonly siteCredential: WindowsFunctionAppSlotSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList">WindowsFunctionAppSlotSiteCredentialList</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccount"></a>

```typescript
public readonly storageAccount: WindowsFunctionAppSlotStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList">WindowsFunctionAppSlotStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsFunctionAppSlotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference">WindowsFunctionAppSlotTimeoutsOutputReference</a>

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: WindowsFunctionAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.backupInput"></a>

```typescript
public readonly backupInput: WindowsFunctionAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a>

---

##### `builtinLoggingEnabledInput`<sup>Optional</sup> <a name="builtinLoggingEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.builtinLoggingEnabledInput"></a>

```typescript
public readonly builtinLoggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateEnabledInput"></a>

```typescript
public readonly clientCertificateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPathsInput`<sup>Optional</sup> <a name="clientCertificateExclusionPathsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateExclusionPathsInput"></a>

```typescript
public readonly clientCertificateExclusionPathsInput: string;
```

- *Type:* string

---

##### `clientCertificateModeInput`<sup>Optional</sup> <a name="clientCertificateModeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateModeInput"></a>

```typescript
public readonly clientCertificateModeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | WindowsFunctionAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]

---

##### `contentShareForceDisabledInput`<sup>Optional</sup> <a name="contentShareForceDisabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.contentShareForceDisabledInput"></a>

```typescript
public readonly contentShareForceDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="dailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dailyMemoryTimeQuotaInput"></a>

```typescript
public readonly dailyMemoryTimeQuotaInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAppIdInput`<sup>Optional</sup> <a name="functionAppIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionAppIdInput"></a>

```typescript
public readonly functionAppIdInput: string;
```

- *Type:* string

---

##### `functionsExtensionVersionInput`<sup>Optional</sup> <a name="functionsExtensionVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionsExtensionVersionInput"></a>

```typescript
public readonly functionsExtensionVersionInput: string;
```

- *Type:* string

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.identityInput"></a>

```typescript
public readonly identityInput: WindowsFunctionAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `servicePlanIdInput`<sup>Optional</sup> <a name="servicePlanIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.servicePlanIdInput"></a>

```typescript
public readonly servicePlanIdInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: WindowsFunctionAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | WindowsFunctionAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `storageKeyVaultSecretIdInput`<sup>Optional</sup> <a name="storageKeyVaultSecretIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageKeyVaultSecretIdInput"></a>

```typescript
public readonly storageKeyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `storageUsesManagedIdentityInput`<sup>Optional</sup> <a name="storageUsesManagedIdentityInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageUsesManagedIdentityInput"></a>

```typescript
public readonly storageUsesManagedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: WindowsFunctionAppSlotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `builtinLoggingEnabled`<sup>Required</sup> <a name="builtinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.builtinLoggingEnabled"></a>

```typescript
public readonly builtinLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPaths`<sup>Required</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

---

##### `contentShareForceDisabled`<sup>Required</sup> <a name="contentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.contentShareForceDisabled"></a>

```typescript
public readonly contentShareForceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

---

##### `functionsExtensionVersion`<sup>Required</sup> <a name="functionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.functionsExtensionVersion"></a>

```typescript
public readonly functionsExtensionVersion: string;
```

- *Type:* string

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageKeyVaultSecretId`<sup>Required</sup> <a name="storageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageKeyVaultSecretId"></a>

```typescript
public readonly storageKeyVaultSecretId: string;
```

- *Type:* string

---

##### `storageUsesManagedIdentity`<sup>Required</sup> <a name="storageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.storageUsesManagedIdentity"></a>

```typescript
public readonly storageUsesManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsFunctionAppSlotAuthSettings <a name="WindowsFunctionAppSlotAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettings: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#enabled WindowsFunctionAppSlot#enabled}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: WindowsFunctionAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#active_directory WindowsFunctionAppSlot#active_directory}

---

##### `additionalLoginParameters`<sup>Optional</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#additional_login_parameters WindowsFunctionAppSlot#additional_login_parameters}

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#allowed_external_redirect_urls WindowsFunctionAppSlot#allowed_external_redirect_urls}

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#default_provider WindowsFunctionAppSlot#default_provider}

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: WindowsFunctionAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#facebook WindowsFunctionAppSlot#facebook}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.github"></a>

```typescript
public readonly github: WindowsFunctionAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#github WindowsFunctionAppSlot#github}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.google"></a>

```typescript
public readonly google: WindowsFunctionAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#google WindowsFunctionAppSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#issuer WindowsFunctionAppSlot#issuer}

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: WindowsFunctionAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#microsoft WindowsFunctionAppSlot#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#runtime_version WindowsFunctionAppSlot#runtime_version}

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#token_refresh_extension_hours WindowsFunctionAppSlot#token_refresh_extension_hours}

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#token_store_enabled WindowsFunctionAppSlot#token_store_enabled}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: WindowsFunctionAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#twitter WindowsFunctionAppSlot#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#unauthenticated_client_action WindowsFunctionAppSlot#unauthenticated_client_action}

---

### WindowsFunctionAppSlotAuthSettingsActiveDirectory <a name="WindowsFunctionAppSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsActiveDirectory: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_id WindowsFunctionAppSlot#client_id}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#allowed_audiences WindowsFunctionAppSlot#allowed_audiences}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret WindowsFunctionAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret_setting_name WindowsFunctionAppSlot#client_secret_setting_name}

---

### WindowsFunctionAppSlotAuthSettingsFacebook <a name="WindowsFunctionAppSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsFacebook: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_id WindowsFunctionAppSlot#app_id}

---

##### `appSecret`<sup>Optional</sup> <a name="appSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_secret WindowsFunctionAppSlot#app_secret}

---

##### `appSecretSettingName`<sup>Optional</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_secret_setting_name WindowsFunctionAppSlot#app_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#oauth_scopes WindowsFunctionAppSlot#oauth_scopes}

---

### WindowsFunctionAppSlotAuthSettingsGithub <a name="WindowsFunctionAppSlotAuthSettingsGithub" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsGithub: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientId">clientId</a></code> | <code>string</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_id WindowsFunctionAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret WindowsFunctionAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret_setting_name WindowsFunctionAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#oauth_scopes WindowsFunctionAppSlot#oauth_scopes}

---

### WindowsFunctionAppSlotAuthSettingsGoogle <a name="WindowsFunctionAppSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsGoogle: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_id WindowsFunctionAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret WindowsFunctionAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret_setting_name WindowsFunctionAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#oauth_scopes WindowsFunctionAppSlot#oauth_scopes}

---

### WindowsFunctionAppSlotAuthSettingsMicrosoft <a name="WindowsFunctionAppSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsMicrosoft: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_id WindowsFunctionAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret WindowsFunctionAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_secret_setting_name WindowsFunctionAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#oauth_scopes WindowsFunctionAppSlot#oauth_scopes}

---

### WindowsFunctionAppSlotAuthSettingsTwitter <a name="WindowsFunctionAppSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotAuthSettingsTwitter: windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#consumer_key WindowsFunctionAppSlot#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#consumer_secret WindowsFunctionAppSlot#consumer_secret}

---

##### `consumerSecretSettingName`<sup>Optional</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#consumer_secret_setting_name WindowsFunctionAppSlot#consumer_secret_setting_name}

---

### WindowsFunctionAppSlotBackup <a name="WindowsFunctionAppSlotBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotBackup: windowsFunctionAppSlot.WindowsFunctionAppSlotBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.name">name</a></code> | <code>string</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should this backup job be enabled? |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.schedule"></a>

```typescript
public readonly schedule: WindowsFunctionAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#schedule WindowsFunctionAppSlot#schedule}

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_account_url WindowsFunctionAppSlot#storage_account_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#enabled WindowsFunctionAppSlot#enabled}

---

### WindowsFunctionAppSlotBackupSchedule <a name="WindowsFunctionAppSlotBackupSchedule" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotBackupSchedule: windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.startTime">startTime</a></code> | <code>string</code> | When the schedule should start working in RFC-3339 format. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#frequency_interval WindowsFunctionAppSlot#frequency_interval}

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#frequency_unit WindowsFunctionAppSlot#frequency_unit}

---

##### `keepAtLeastOneBackup`<sup>Optional</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#keep_at_least_one_backup WindowsFunctionAppSlot#keep_at_least_one_backup}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#retention_period_days WindowsFunctionAppSlot#retention_period_days}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#start_time WindowsFunctionAppSlot#start_time}

---

### WindowsFunctionAppSlotConfig <a name="WindowsFunctionAppSlotConfig" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotConfig: windowsFunctionAppSlot.WindowsFunctionAppSlotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.functionAppId">functionAppId</a></code> | <code>string</code> | The ID of the Windows Function App this Slot is a member of. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the Windows Function App Slot. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.builtinLoggingEnabled">builtinLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Function App Slot use Client Certificates. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | The mode of the Function App Slot's client certificates requirement for incoming requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.contentShareForceDisabled">contentShareForceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force disable the content share settings. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | The amount of memory in gigabyte-seconds that your application is allowed to consume per day. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the Windows Function App Slot enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.functionsExtensionVersion">functionsExtensionVersion</a></code> | <code>string</code> | The runtime version associated with the Function App Slot. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Can the Function App Slot only be accessed via HTTPS? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#id WindowsFunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Key Vault access. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_plan_id WindowsFunctionAppSlot#service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | The access key which will be used to access the storage account for the Function App Slot. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | The backend storage account name which will be used by this Function App Slot. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageKeyVaultSecretId">storageKeyVaultSecretId</a></code> | <code>string</code> | The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageUsesManagedIdentity">storageUsesManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Function App Slot use its Managed Identity to access storage? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#tags WindowsFunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

The ID of the Windows Function App this Slot is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#function_app_id WindowsFunctionAppSlot#function_app_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the Windows Function App Slot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: WindowsFunctionAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#site_config WindowsFunctionAppSlot#site_config}

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_settings WindowsFunctionAppSlot#app_settings}

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.authSettings"></a>

```typescript
public readonly authSettings: WindowsFunctionAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#auth_settings WindowsFunctionAppSlot#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.backup"></a>

```typescript
public readonly backup: WindowsFunctionAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#backup WindowsFunctionAppSlot#backup}

---

##### `builtinLoggingEnabled`<sup>Optional</sup> <a name="builtinLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.builtinLoggingEnabled"></a>

```typescript
public readonly builtinLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#builtin_logging_enabled WindowsFunctionAppSlot#builtin_logging_enabled}

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Function App Slot use Client Certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_certificate_enabled WindowsFunctionAppSlot#client_certificate_enabled}

---

##### `clientCertificateExclusionPaths`<sup>Optional</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_certificate_exclusion_paths WindowsFunctionAppSlot#client_certificate_exclusion_paths}

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

The mode of the Function App Slot's client certificates requirement for incoming requests.

Possible values are `Required`, `Optional`, and `OptionalInteractiveUser`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#client_certificate_mode WindowsFunctionAppSlot#client_certificate_mode}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | WindowsFunctionAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#connection_string WindowsFunctionAppSlot#connection_string}

---

##### `contentShareForceDisabled`<sup>Optional</sup> <a name="contentShareForceDisabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.contentShareForceDisabled"></a>

```typescript
public readonly contentShareForceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force disable the content share settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#content_share_force_disabled WindowsFunctionAppSlot#content_share_force_disabled}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

The amount of memory in gigabyte-seconds that your application is allowed to consume per day.

Setting this value only affects function apps in Consumption Plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#daily_memory_time_quota WindowsFunctionAppSlot#daily_memory_time_quota}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the Windows Function App Slot enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#enabled WindowsFunctionAppSlot#enabled}

---

##### `functionsExtensionVersion`<sup>Optional</sup> <a name="functionsExtensionVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.functionsExtensionVersion"></a>

```typescript
public readonly functionsExtensionVersion: string;
```

- *Type:* string

The runtime version associated with the Function App Slot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#functions_extension_version WindowsFunctionAppSlot#functions_extension_version}

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Can the Function App Slot only be accessed via HTTPS?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#https_only WindowsFunctionAppSlot#https_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#id WindowsFunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.identity"></a>

```typescript
public readonly identity: WindowsFunctionAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#identity WindowsFunctionAppSlot#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

The User Assigned Identity to use for Key Vault access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#key_vault_reference_identity_id WindowsFunctionAppSlot#key_vault_reference_identity_id}

---

##### `servicePlanId`<sup>Optional</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_plan_id WindowsFunctionAppSlot#service_plan_id}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | WindowsFunctionAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_account WindowsFunctionAppSlot#storage_account}

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

The access key which will be used to access the storage account for the Function App Slot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_account_access_key WindowsFunctionAppSlot#storage_account_access_key}

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

The backend storage account name which will be used by this Function App Slot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_account_name WindowsFunctionAppSlot#storage_account_name}

---

##### `storageKeyVaultSecretId`<sup>Optional</sup> <a name="storageKeyVaultSecretId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageKeyVaultSecretId"></a>

```typescript
public readonly storageKeyVaultSecretId: string;
```

- *Type:* string

The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_key_vault_secret_id WindowsFunctionAppSlot#storage_key_vault_secret_id}

---

##### `storageUsesManagedIdentity`<sup>Optional</sup> <a name="storageUsesManagedIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.storageUsesManagedIdentity"></a>

```typescript
public readonly storageUsesManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Function App Slot use its Managed Identity to access storage?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#storage_uses_managed_identity WindowsFunctionAppSlot#storage_uses_managed_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#tags WindowsFunctionAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsFunctionAppSlotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#timeouts WindowsFunctionAppSlot#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConfig.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}.

---

### WindowsFunctionAppSlotConnectionString <a name="WindowsFunctionAppSlotConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotConnectionString: windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.name">name</a></code> | <code>string</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.type">type</a></code> | <code>string</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.value">value</a></code> | <code>string</code> | The connection string value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#type WindowsFunctionAppSlot#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#value WindowsFunctionAppSlot#value}

---

### WindowsFunctionAppSlotIdentity <a name="WindowsFunctionAppSlotIdentity" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotIdentity: windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#type WindowsFunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#identity_ids WindowsFunctionAppSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#type WindowsFunctionAppSlot#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#identity_ids WindowsFunctionAppSlot#identity_ids}.

---

### WindowsFunctionAppSlotSiteConfig <a name="WindowsFunctionAppSlotSiteConfig" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfig: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this Windows Web App is Always On enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | The URL of the API definition that describes this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | The ID of the API Management API for this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | The program and any arguments used to launch this app via the command line. (Example `node myapp.js`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationInsightsConnectionString">applicationInsightsConnectionString</a></code> | <code>string</code> | The Connection String for linking the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationInsightsKey">applicationInsightsKey</a></code> | <code>string</code> | The Instrumentation Key for connecting the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | The number of workers this function app can scale out to. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appServiceLogs">appServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a></code> | app_service_logs block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#auto_swap_slot_name WindowsFunctionAppSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | Specifies a list of Default Documents for the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | State of FTP / FTPS service for this function app. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | The path to be checked for this function app health. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the http2 protocol should be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_restriction WindowsFunctionAppSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | The configures the minimum version of TLS required for SSL requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Remote Debugging be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Functions Runtime Scale Monitoring be enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#scm_ip_restriction WindowsFunctionAppSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Function App `ip_restriction` configuration be used for the SCM also. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Web App use a 32-bit worker. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should Web Sockets be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.workerCount">workerCount</a></code> | <code>number</code> | The number of Workers for this Windows Function App. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this Windows Web App is Always On enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#always_on WindowsFunctionAppSlot#always_on}

---

##### `apiDefinitionUrl`<sup>Optional</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

The URL of the API definition that describes this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#api_definition_url WindowsFunctionAppSlot#api_definition_url}

---

##### `apiManagementApiId`<sup>Optional</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

The ID of the API Management API for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#api_management_api_id WindowsFunctionAppSlot#api_management_api_id}

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_command_line WindowsFunctionAppSlot#app_command_line}

---

##### `applicationInsightsConnectionString`<sup>Optional</sup> <a name="applicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationInsightsConnectionString"></a>

```typescript
public readonly applicationInsightsConnectionString: string;
```

- *Type:* string

The Connection String for linking the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#application_insights_connection_string WindowsFunctionAppSlot#application_insights_connection_string}

---

##### `applicationInsightsKey`<sup>Optional</sup> <a name="applicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationInsightsKey"></a>

```typescript
public readonly applicationInsightsKey: string;
```

- *Type:* string

The Instrumentation Key for connecting the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#application_insights_key WindowsFunctionAppSlot#application_insights_key}

---

##### `applicationStack`<sup>Optional</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.applicationStack"></a>

```typescript
public readonly applicationStack: WindowsFunctionAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#application_stack WindowsFunctionAppSlot#application_stack}

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

The number of workers this function app can scale out to.

Only applicable to apps on the Consumption and Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_scale_limit WindowsFunctionAppSlot#app_scale_limit}

---

##### `appServiceLogs`<sup>Optional</sup> <a name="appServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.appServiceLogs"></a>

```typescript
public readonly appServiceLogs: WindowsFunctionAppSlotSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a>

app_service_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#app_service_logs WindowsFunctionAppSlot#app_service_logs}

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#auto_swap_slot_name WindowsFunctionAppSlot#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.cors"></a>

```typescript
public readonly cors: WindowsFunctionAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#cors WindowsFunctionAppSlot#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

Specifies a list of Default Documents for the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#default_documents WindowsFunctionAppSlot#default_documents}

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#elastic_instance_minimum WindowsFunctionAppSlot#elastic_instance_minimum}

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

State of FTP / FTPS service for this function app.

Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ftps_state WindowsFunctionAppSlot#ftps_state}

---

##### `healthCheckEvictionTimeInMin`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#health_check_eviction_time_in_min WindowsFunctionAppSlot#health_check_eviction_time_in_min}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

The path to be checked for this function app health.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#health_check_path WindowsFunctionAppSlot#health_check_path}

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the http2 protocol should be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#http2_enabled WindowsFunctionAppSlot#http2_enabled}

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_restriction WindowsFunctionAppSlot#ip_restriction}.

---

##### `loadBalancingMode`<sup>Optional</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#load_balancing_mode WindowsFunctionAppSlot#load_balancing_mode}

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#managed_pipeline_mode WindowsFunctionAppSlot#managed_pipeline_mode}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

The configures the minimum version of TLS required for SSL requests.

Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#minimum_tls_version WindowsFunctionAppSlot#minimum_tls_version}

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#pre_warmed_instance_count WindowsFunctionAppSlot#pre_warmed_instance_count}

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Remote Debugging be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#remote_debugging_enabled WindowsFunctionAppSlot#remote_debugging_enabled}

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#remote_debugging_version WindowsFunctionAppSlot#remote_debugging_version}

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Functions Runtime Scale Monitoring be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#runtime_scale_monitoring_enabled WindowsFunctionAppSlot#runtime_scale_monitoring_enabled}

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#scm_ip_restriction WindowsFunctionAppSlot#scm_ip_restriction}.

---

##### `scmMinimumTlsVersion`<sup>Optional</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#scm_minimum_tls_version WindowsFunctionAppSlot#scm_minimum_tls_version}

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Function App `ip_restriction` configuration be used for the SCM also.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#scm_use_main_ip_restriction WindowsFunctionAppSlot#scm_use_main_ip_restriction}

---

##### `use32BitWorker`<sup>Optional</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Web App use a 32-bit worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#use_32_bit_worker WindowsFunctionAppSlot#use_32_bit_worker}

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#vnet_route_all_enabled WindowsFunctionAppSlot#vnet_route_all_enabled}

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should Web Sockets be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#websockets_enabled WindowsFunctionAppSlot#websockets_enabled}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

The number of Workers for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#worker_count WindowsFunctionAppSlot#worker_count}

---

### WindowsFunctionAppSlotSiteConfigApplicationStack <a name="WindowsFunctionAppSlotSiteConfigApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigApplicationStack: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.javaVersion">javaVersion</a></code> | <code>string</code> | The version of Java to use. Possible values are `1.8`, `11` and `17`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | The version of Node to use. Possible values include `12`, and `14`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.powershellCoreVersion">powershellCoreVersion</a></code> | <code>string</code> | The PowerShell Core version to use. Possible values are `7`, and `7.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.useCustomRuntime">useCustomRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Does the Function App use a custom Application Stack? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.useDotnetIsolatedRuntime">useDotnetIsolatedRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the DotNet process use an isolated runtime. Defaults to `false`. |

---

##### `dotnetVersion`<sup>Optional</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#dotnet_version WindowsFunctionAppSlot#dotnet_version}

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The version of Java to use. Possible values are `1.8`, `11` and `17`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#java_version WindowsFunctionAppSlot#java_version}

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

The version of Node to use. Possible values include `12`, and `14`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#node_version WindowsFunctionAppSlot#node_version}

---

##### `powershellCoreVersion`<sup>Optional</sup> <a name="powershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.powershellCoreVersion"></a>

```typescript
public readonly powershellCoreVersion: string;
```

- *Type:* string

The PowerShell Core version to use. Possible values are `7`, and `7.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#powershell_core_version WindowsFunctionAppSlot#powershell_core_version}

---

##### `useCustomRuntime`<sup>Optional</sup> <a name="useCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.useCustomRuntime"></a>

```typescript
public readonly useCustomRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Does the Function App use a custom Application Stack?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#use_custom_runtime WindowsFunctionAppSlot#use_custom_runtime}

---

##### `useDotnetIsolatedRuntime`<sup>Optional</sup> <a name="useDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack.property.useDotnetIsolatedRuntime"></a>

```typescript
public readonly useDotnetIsolatedRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the DotNet process use an isolated runtime. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#use_dotnet_isolated_runtime WindowsFunctionAppSlot#use_dotnet_isolated_runtime}

---

### WindowsFunctionAppSlotSiteConfigAppServiceLogs <a name="WindowsFunctionAppSlotSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigAppServiceLogs: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs.property.diskQuotaMb">diskQuotaMb</a></code> | <code>number</code> | The amount of disk space to use for logs. Valid values are between `25` and `100`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete). |

---

##### `diskQuotaMb`<sup>Optional</sup> <a name="diskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs.property.diskQuotaMb"></a>

```typescript
public readonly diskQuotaMb: number;
```

- *Type:* number

The amount of disk space to use for logs. Valid values are between `25` and `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#disk_quota_mb WindowsFunctionAppSlot#disk_quota_mb}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#retention_period_days WindowsFunctionAppSlot#retention_period_days}

---

### WindowsFunctionAppSlotSiteConfigCors <a name="WindowsFunctionAppSlotSiteConfigCors" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigCors: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#allowed_origins WindowsFunctionAppSlot#allowed_origins}

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#support_credentials WindowsFunctionAppSlot#support_credentials}

---

### WindowsFunctionAppSlotSiteConfigIpRestriction <a name="WindowsFunctionAppSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigIpRestriction: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#action WindowsFunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#headers WindowsFunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_address WindowsFunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#priority WindowsFunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_tag WindowsFunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#action WindowsFunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#headers WindowsFunctionAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_address WindowsFunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#priority WindowsFunctionAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_tag WindowsFunctionAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}.

---

### WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders <a name="WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigIpRestrictionHeaders: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_azure_fdid WindowsFunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_fd_health_probe WindowsFunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_for WindowsFunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_host WindowsFunctionAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_azure_fdid WindowsFunctionAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_fd_health_probe WindowsFunctionAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_for WindowsFunctionAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_host WindowsFunctionAppSlot#x_forwarded_host}.

---

### WindowsFunctionAppSlotSiteConfigScmIpRestriction <a name="WindowsFunctionAppSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigScmIpRestriction: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#action WindowsFunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#headers WindowsFunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_address WindowsFunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#priority WindowsFunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_tag WindowsFunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#action WindowsFunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#headers WindowsFunctionAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#ip_address WindowsFunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#priority WindowsFunctionAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#service_tag WindowsFunctionAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#virtual_network_subnet_id WindowsFunctionAppSlot#virtual_network_subnet_id}.

---

### WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders <a name="WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_azure_fdid WindowsFunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_fd_health_probe WindowsFunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_for WindowsFunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_host WindowsFunctionAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_azure_fdid WindowsFunctionAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_fd_health_probe WindowsFunctionAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_for WindowsFunctionAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#x_forwarded_host WindowsFunctionAppSlot#x_forwarded_host}.

---

### WindowsFunctionAppSlotSiteCredential <a name="WindowsFunctionAppSlotSiteCredential" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredential.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotSiteCredential: windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredential = { ... }
```


### WindowsFunctionAppSlotStorageAccount <a name="WindowsFunctionAppSlotStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotStorageAccount: windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#access_key WindowsFunctionAppSlot#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#account_name WindowsFunctionAppSlot#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#share_name WindowsFunctionAppSlot#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#type WindowsFunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#mount_path WindowsFunctionAppSlot#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#access_key WindowsFunctionAppSlot#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#account_name WindowsFunctionAppSlot#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#name WindowsFunctionAppSlot#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#share_name WindowsFunctionAppSlot#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#type WindowsFunctionAppSlot#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#mount_path WindowsFunctionAppSlot#mount_path}.

---

### WindowsFunctionAppSlotTimeouts <a name="WindowsFunctionAppSlotTimeouts" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

const windowsFunctionAppSlotTimeouts: windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#create WindowsFunctionAppSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#delete WindowsFunctionAppSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#read WindowsFunctionAppSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#update WindowsFunctionAppSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#create WindowsFunctionAppSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#delete WindowsFunctionAppSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#read WindowsFunctionAppSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app_slot#update WindowsFunctionAppSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference <a name="WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a>

---


### WindowsFunctionAppSlotAuthSettingsFacebookOutputReference <a name="WindowsFunctionAppSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetAppSecret">resetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetAppSecretSettingName">resetAppSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSecret` <a name="resetAppSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```typescript
public resetAppSecret(): void
```

##### `resetAppSecretSettingName` <a name="resetAppSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```typescript
public resetAppSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">appSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `appSecretSettingNameInput`<sup>Optional</sup> <a name="appSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```typescript
public readonly appSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a>

---


### WindowsFunctionAppSlotAuthSettingsGithubOutputReference <a name="WindowsFunctionAppSlotAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a>

---


### WindowsFunctionAppSlotAuthSettingsGoogleOutputReference <a name="WindowsFunctionAppSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a>

---


### WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference <a name="WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a>

---


### WindowsFunctionAppSlotAuthSettingsOutputReference <a name="WindowsFunctionAppSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParameters">resetAdditionalLoginParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: WindowsFunctionAppSlotAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: WindowsFunctionAppSlotAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGithub"></a>

```typescript
public putGithub(value: WindowsFunctionAppSlotAuthSettingsGithub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: WindowsFunctionAppSlotAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: WindowsFunctionAppSlotAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: WindowsFunctionAppSlotAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParameters` <a name="resetAdditionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```typescript
public resetAdditionalLoginParameters(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetGithub"></a>

```typescript
public resetGithub(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference">WindowsFunctionAppSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference">WindowsFunctionAppSlotAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference">WindowsFunctionAppSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference">WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference">WindowsFunctionAppSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParametersInput">additionalLoginParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.githubInput">githubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: WindowsFunctionAppSlotAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebookOutputReference">WindowsFunctionAppSlotAuthSettingsFacebookOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.github"></a>

```typescript
public readonly github: WindowsFunctionAppSlotAuthSettingsGithubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithubOutputReference">WindowsFunctionAppSlotAuthSettingsGithubOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: WindowsFunctionAppSlotAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogleOutputReference">WindowsFunctionAppSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference">WindowsFunctionAppSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: WindowsFunctionAppSlotAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference">WindowsFunctionAppSlotAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: WindowsFunctionAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsActiveDirectory">WindowsFunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParametersInput`<sup>Optional</sup> <a name="additionalLoginParametersInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```typescript
public readonly additionalLoginParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: WindowsFunctionAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsFacebook">WindowsFunctionAppSlotAuthSettingsFacebook</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.githubInput"></a>

```typescript
public readonly githubInput: WindowsFunctionAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGithub">WindowsFunctionAppSlotAuthSettingsGithub</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: WindowsFunctionAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsGoogle">WindowsFunctionAppSlotAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: WindowsFunctionAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsMicrosoft">WindowsFunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: WindowsFunctionAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParameters`<sup>Required</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettings">WindowsFunctionAppSlotAuthSettings</a>

---


### WindowsFunctionAppSlotAuthSettingsTwitterOutputReference <a name="WindowsFunctionAppSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">resetConsumerSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```typescript
public resetConsumerSecret(): void
```

##### `resetConsumerSecretSettingName` <a name="resetConsumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```typescript
public resetConsumerSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">consumerSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerSecretSettingNameInput`<sup>Optional</sup> <a name="consumerSecretSettingNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```typescript
public readonly consumerSecretSettingNameInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotAuthSettingsTwitter">WindowsFunctionAppSlotAuthSettingsTwitter</a>

---


### WindowsFunctionAppSlotBackupOutputReference <a name="WindowsFunctionAppSlotBackupOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: WindowsFunctionAppSlotBackupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference">WindowsFunctionAppSlotBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.schedule"></a>

```typescript
public readonly schedule: WindowsFunctionAppSlotBackupScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference">WindowsFunctionAppSlotBackupScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: WindowsFunctionAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a>

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.storageAccountUrlInput"></a>

```typescript
public readonly storageAccountUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackup">WindowsFunctionAppSlotBackup</a>

---


### WindowsFunctionAppSlotBackupScheduleOutputReference <a name="WindowsFunctionAppSlotBackupScheduleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetKeepAtLeastOneBackup">resetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepAtLeastOneBackup` <a name="resetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```typescript
public resetKeepAtLeastOneBackup(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.lastExecutionTime">lastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyUnitInput">frequencyUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keepAtLeastOneBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastExecutionTime`<sup>Required</sup> <a name="lastExecutionTime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.lastExecutionTime"></a>

```typescript
public readonly lastExecutionTime: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `frequencyUnitInput`<sup>Optional</sup> <a name="frequencyUnitInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```typescript
public readonly frequencyUnitInput: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackupInput`<sup>Optional</sup> <a name="keepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```typescript
public readonly keepAtLeastOneBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotBackupSchedule">WindowsFunctionAppSlotBackupSchedule</a>

---


### WindowsFunctionAppSlotConnectionStringList <a name="WindowsFunctionAppSlotConnectionStringList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a>[]

---


### WindowsFunctionAppSlotConnectionStringOutputReference <a name="WindowsFunctionAppSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotConnectionString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotConnectionString">WindowsFunctionAppSlotConnectionString</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotIdentityOutputReference <a name="WindowsFunctionAppSlotIdentityOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotIdentity">WindowsFunctionAppSlotIdentity</a>

---


### WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference <a name="WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetDotnetVersion">resetDotnetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetNodeVersion">resetNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion">resetPowershellCoreVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetUseCustomRuntime">resetUseCustomRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime">resetUseDotnetIsolatedRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDotnetVersion` <a name="resetDotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```typescript
public resetDotnetVersion(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetNodeVersion` <a name="resetNodeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```typescript
public resetNodeVersion(): void
```

##### `resetPowershellCoreVersion` <a name="resetPowershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion"></a>

```typescript
public resetPowershellCoreVersion(): void
```

##### `resetUseCustomRuntime` <a name="resetUseCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetUseCustomRuntime"></a>

```typescript
public resetUseCustomRuntime(): void
```

##### `resetUseDotnetIsolatedRuntime` <a name="resetUseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime"></a>

```typescript
public resetUseDotnetIsolatedRuntime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">dotnetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersionInput">nodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput">powershellCoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput">useCustomRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput">useDotnetIsolatedRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">powershellCoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useCustomRuntime">useCustomRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">useDotnetIsolatedRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dotnetVersionInput`<sup>Optional</sup> <a name="dotnetVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```typescript
public readonly dotnetVersionInput: string;
```

- *Type:* string

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `nodeVersionInput`<sup>Optional</sup> <a name="nodeVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```typescript
public readonly nodeVersionInput: string;
```

- *Type:* string

---

##### `powershellCoreVersionInput`<sup>Optional</sup> <a name="powershellCoreVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput"></a>

```typescript
public readonly powershellCoreVersionInput: string;
```

- *Type:* string

---

##### `useCustomRuntimeInput`<sup>Optional</sup> <a name="useCustomRuntimeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput"></a>

```typescript
public readonly useCustomRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useDotnetIsolatedRuntimeInput`<sup>Optional</sup> <a name="useDotnetIsolatedRuntimeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput"></a>

```typescript
public readonly useDotnetIsolatedRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dotnetVersion`<sup>Required</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

##### `powershellCoreVersion`<sup>Required</sup> <a name="powershellCoreVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```typescript
public readonly powershellCoreVersion: string;
```

- *Type:* string

---

##### `useCustomRuntime`<sup>Required</sup> <a name="useCustomRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```typescript
public readonly useCustomRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useDotnetIsolatedRuntime`<sup>Required</sup> <a name="useDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```typescript
public readonly useDotnetIsolatedRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a>

---


### WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference <a name="WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb">resetDiskQuotaMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskQuotaMb` <a name="resetDiskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb"></a>

```typescript
public resetDiskQuotaMb(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput">diskQuotaMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">diskQuotaMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskQuotaMbInput`<sup>Optional</sup> <a name="diskQuotaMbInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput"></a>

```typescript
public readonly diskQuotaMbInput: number;
```

- *Type:* number

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `diskQuotaMb`<sup>Required</sup> <a name="diskQuotaMb" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```typescript
public readonly diskQuotaMb: number;
```

- *Type:* number

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a>

---


### WindowsFunctionAppSlotSiteConfigCorsOutputReference <a name="WindowsFunctionAppSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a>

---


### WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList <a name="WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]

---


### WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotSiteConfigIpRestrictionList <a name="WindowsFunctionAppSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]

---


### WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference <a name="WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotSiteConfigOutputReference <a name="WindowsFunctionAppSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putApplicationStack">putApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putAppServiceLogs">putAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApiDefinitionUrl">resetApiDefinitionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApiManagementApiId">resetApiManagementApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationInsightsConnectionString">resetApplicationInsightsConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationInsightsKey">resetApplicationInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationStack">resetApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppServiceLogs">resetAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">resetHealthCheckEvictionTimeInMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetLoadBalancingMode">resetLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmMinimumTlsVersion">resetScmMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetUse32BitWorker">resetUse32BitWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationStack` <a name="putApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putApplicationStack"></a>

```typescript
public putApplicationStack(value: WindowsFunctionAppSlotSiteConfigApplicationStack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putApplicationStack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a>

---

##### `putAppServiceLogs` <a name="putAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putAppServiceLogs"></a>

```typescript
public putAppServiceLogs(value: WindowsFunctionAppSlotSiteConfigAppServiceLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putAppServiceLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: WindowsFunctionAppSlotSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetApiDefinitionUrl` <a name="resetApiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```typescript
public resetApiDefinitionUrl(): void
```

##### `resetApiManagementApiId` <a name="resetApiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApiManagementApiId"></a>

```typescript
public resetApiManagementApiId(): void
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppCommandLine"></a>

```typescript
public resetAppCommandLine(): void
```

##### `resetApplicationInsightsConnectionString` <a name="resetApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationInsightsConnectionString"></a>

```typescript
public resetApplicationInsightsConnectionString(): void
```

##### `resetApplicationInsightsKey` <a name="resetApplicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationInsightsKey"></a>

```typescript
public resetApplicationInsightsKey(): void
```

##### `resetApplicationStack` <a name="resetApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetApplicationStack"></a>

```typescript
public resetApplicationStack(): void
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit"></a>

```typescript
public resetAppScaleLimit(): void
```

##### `resetAppServiceLogs` <a name="resetAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAppServiceLogs"></a>

```typescript
public resetAppServiceLogs(): void
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```typescript
public resetAutoSwapSlotName(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetDefaultDocuments"></a>

```typescript
public resetDefaultDocuments(): void
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```typescript
public resetElasticInstanceMinimum(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckEvictionTimeInMin` <a name="resetHealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```typescript
public resetHealthCheckEvictionTimeInMin(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetLoadBalancingMode` <a name="resetLoadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetLoadBalancingMode"></a>

```typescript
public resetLoadBalancingMode(): void
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetManagedPipelineMode"></a>

```typescript
public resetManagedPipelineMode(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```typescript
public resetPreWarmedInstanceCount(): void
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```typescript
public resetRemoteDebuggingEnabled(): void
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```typescript
public resetRemoteDebuggingVersion(): void
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```typescript
public resetRuntimeScaleMonitoringEnabled(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmMinimumTlsVersion` <a name="resetScmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```typescript
public resetScmMinimumTlsVersion(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorker` <a name="resetUse32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetUse32BitWorker"></a>

```typescript
public resetUse32BitWorker(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.resetWorkerCount"></a>

```typescript
public resetWorkerCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference">WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appServiceLogs">appServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference">WindowsFunctionAppSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailedErrorLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList">WindowsFunctionAppSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList">WindowsFunctionAppSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiDefinitionUrlInput">apiDefinitionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiManagementApiIdInput">apiManagementApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsConnectionStringInput">applicationInsightsConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsKeyInput">applicationInsightsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationStackInput">applicationStackInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appServiceLogsInput">appServiceLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">healthCheckEvictionTimeInMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.loadBalancingModeInput">loadBalancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersionInput">scmMinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerInput">use32BitWorkerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsConnectionString">applicationInsightsConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsKey">applicationInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationStack`<sup>Required</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationStack"></a>

```typescript
public readonly applicationStack: WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference">WindowsFunctionAppSlotSiteConfigApplicationStackOutputReference</a>

---

##### `appServiceLogs`<sup>Required</sup> <a name="appServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appServiceLogs"></a>

```typescript
public readonly appServiceLogs: WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSlotSiteConfigAppServiceLogsOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: WindowsFunctionAppSlotSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCorsOutputReference">WindowsFunctionAppSlotSiteConfigCorsOutputReference</a>

---

##### `detailedErrorLoggingEnabled`<sup>Required</sup> <a name="detailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```typescript
public readonly detailedErrorLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: WindowsFunctionAppSlotSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestrictionList">WindowsFunctionAppSlotSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: WindowsFunctionAppSlotSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList">WindowsFunctionAppSlotSiteConfigScmIpRestrictionList</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrlInput`<sup>Optional</sup> <a name="apiDefinitionUrlInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```typescript
public readonly apiDefinitionUrlInput: string;
```

- *Type:* string

---

##### `apiManagementApiIdInput`<sup>Optional</sup> <a name="apiManagementApiIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```typescript
public readonly apiManagementApiIdInput: string;
```

- *Type:* string

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appCommandLineInput"></a>

```typescript
public readonly appCommandLineInput: string;
```

- *Type:* string

---

##### `applicationInsightsConnectionStringInput`<sup>Optional</sup> <a name="applicationInsightsConnectionStringInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsConnectionStringInput"></a>

```typescript
public readonly applicationInsightsConnectionStringInput: string;
```

- *Type:* string

---

##### `applicationInsightsKeyInput`<sup>Optional</sup> <a name="applicationInsightsKeyInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsKeyInput"></a>

```typescript
public readonly applicationInsightsKeyInput: string;
```

- *Type:* string

---

##### `applicationStackInput`<sup>Optional</sup> <a name="applicationStackInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationStackInput"></a>

```typescript
public readonly applicationStackInput: WindowsFunctionAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigApplicationStack">WindowsFunctionAppSlotSiteConfigApplicationStack</a>

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput"></a>

```typescript
public readonly appScaleLimitInput: number;
```

- *Type:* number

---

##### `appServiceLogsInput`<sup>Optional</sup> <a name="appServiceLogsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appServiceLogsInput"></a>

```typescript
public readonly appServiceLogsInput: WindowsFunctionAppSlotSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigAppServiceLogs">WindowsFunctionAppSlotSiteConfigAppServiceLogs</a>

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```typescript
public readonly autoSwapSlotNameInput: string;
```

- *Type:* string

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: WindowsFunctionAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigCors">WindowsFunctionAppSlotSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```typescript
public readonly defaultDocumentsInput: string[];
```

- *Type:* string[]

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```typescript
public readonly elasticInstanceMinimumInput: number;
```

- *Type:* number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMinInput`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMinInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```typescript
public readonly healthCheckEvictionTimeInMinInput: number;
```

- *Type:* number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | WindowsFunctionAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigIpRestriction">WindowsFunctionAppSlotSiteConfigIpRestriction</a>[]

---

##### `loadBalancingModeInput`<sup>Optional</sup> <a name="loadBalancingModeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```typescript
public readonly loadBalancingModeInput: string;
```

- *Type:* string

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```typescript
public readonly managedPipelineModeInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```typescript
public readonly preWarmedInstanceCountInput: number;
```

- *Type:* number

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```typescript
public readonly remoteDebuggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```typescript
public readonly remoteDebuggingVersionInput: string;
```

- *Type:* string

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```typescript
public readonly runtimeScaleMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]

---

##### `scmMinimumTlsVersionInput`<sup>Optional</sup> <a name="scmMinimumTlsVersionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```typescript
public readonly scmMinimumTlsVersionInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerInput`<sup>Optional</sup> <a name="use32BitWorkerInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```typescript
public readonly use32BitWorkerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.workerCountInput"></a>

```typescript
public readonly workerCountInput: number;
```

- *Type:* number

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrl`<sup>Required</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

---

##### `apiManagementApiId`<sup>Required</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `applicationInsightsConnectionString`<sup>Required</sup> <a name="applicationInsightsConnectionString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```typescript
public readonly applicationInsightsConnectionString: string;
```

- *Type:* string

---

##### `applicationInsightsKey`<sup>Required</sup> <a name="applicationInsightsKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.applicationInsightsKey"></a>

```typescript
public readonly applicationInsightsKey: string;
```

- *Type:* string

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMin`<sup>Required</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingMode`<sup>Required</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmMinimumTlsVersion`<sup>Required</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorker`<sup>Required</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfig">WindowsFunctionAppSlotSiteConfig</a>

---


### WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList <a name="WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---


### WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotSiteConfigScmIpRestrictionList <a name="WindowsFunctionAppSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a>[]

---


### WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference <a name="WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteConfigScmIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteConfigScmIpRestriction">WindowsFunctionAppSlotSiteConfigScmIpRestriction</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotSiteCredentialList <a name="WindowsFunctionAppSlotSiteCredentialList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WindowsFunctionAppSlotSiteCredentialOutputReference <a name="WindowsFunctionAppSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredential">WindowsFunctionAppSlotSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotSiteCredential">WindowsFunctionAppSlotSiteCredential</a>

---


### WindowsFunctionAppSlotStorageAccountList <a name="WindowsFunctionAppSlotStorageAccountList" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.get"></a>

```typescript
public get(index: number): WindowsFunctionAppSlotStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsFunctionAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a>[]

---


### WindowsFunctionAppSlotStorageAccountOutputReference <a name="WindowsFunctionAppSlotStorageAccountOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotStorageAccount | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotStorageAccount">WindowsFunctionAppSlotStorageAccount</a> | cdktf.IResolvable

---


### WindowsFunctionAppSlotTimeoutsOutputReference <a name="WindowsFunctionAppSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.Initializer"></a>

```typescript
import { windowsFunctionAppSlot } from '@cdktf/provider-azurerm'

new windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsFunctionAppSlotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionAppSlot.WindowsFunctionAppSlotTimeouts">WindowsFunctionAppSlotTimeouts</a> | cdktf.IResolvable

---



